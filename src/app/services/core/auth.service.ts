import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {FirebaseAuth} from '@angular/fire';
import {Observable} from 'rxjs';
import {auth, User} from 'firebase';
import {Player} from '../../models/player';
import {PlayerService} from './player.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authState: Observable<User>;
  public loggedInPlayer: Observable<Player>;

  constructor(public afAuth: AngularFireAuth, private playerService: PlayerService, private router: Router) {
    this.authState = afAuth.authState;
    this.authState.subscribe(user => {
      playerService.createUser(user, user.displayName)
        .catch(err => console.log(err))
        .then(() => {
          this.loggedInPlayer = this.playerService.getPlayerById(user.uid);
        });
    });
  }

  public signInWithGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).catch(err => console.log(err));
  }

  public signOut() {
    return this.afAuth.auth.signOut();
  }
}
