import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {FirebaseAuth} from '@angular/fire';
import {Observable} from 'rxjs';
import {auth, User} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authState: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afFirestore: AngularFirestore, private router: Router) {
    this.authState = afAuth.authState;
  }

  public signInWithGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  public signOut() {
    this.afAuth.auth.signOut();
  }
}
