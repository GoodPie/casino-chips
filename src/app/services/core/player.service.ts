import { Injectable } from '@angular/core';
import {User} from 'firebase';
import {Action, AngularFirestore, DocumentChangeAction, DocumentSnapshot} from '@angular/fire/firestore';
import {HelperService} from './helper.service';
import {Observable} from 'rxjs';
import {Player} from '../../models/player';
import {AuthService} from './auth.service';
import {error} from 'util';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private PLAYER_PATH = 'players';
  private DEFAULT_CHIPS = 100;
  private DEFAULT_BANNER_COLOUR = '#FFA700';

  public loggedInPlayer: Observable<Player>;

  constructor(private afFirestore: AngularFirestore) {
  }

  /**
   * Gets the player by their ID
   *
   * @param userId Auth ID of player to search
   */
  public getPlayerById(userId: string): Observable<Player> {
    return this.afFirestore.doc<Player>(`${this.PLAYER_PATH}/${userId}`).valueChanges();
  }

  /**
   * Gets the player by their ID with FireStore meta info
   *
   * @param userId Auth ID for player to search
   */
  public getPlayerByIdWithMeta(userId: string): Observable<Action<DocumentSnapshot<Player>>> {
    return this.afFirestore.doc<Player>(`${this.PLAYER_PATH}/${userId}`).snapshotChanges();
  }

  /**
   * Create a new user if the user doesn't exist
   *
   * @param user
   * @param username
   */
  public createUser(user: User, username?: string) {

    return new Promise(((resolve, reject) => {
      this.getPlayerByIdWithMeta(user.uid).subscribe(documentChangeAction => {
        const playerExists = documentChangeAction.payload.exists;
        if (playerExists === false) {
          const newPlayer = new Player(user.uid, user.displayName, user.email, this.DEFAULT_BANNER_COLOUR, this.DEFAULT_CHIPS);
          this.afFirestore.collection(this.PLAYER_PATH).doc(user.uid).set(Player.ToFirebaseObject(newPlayer))
            .then(value => resolve(value))
            .catch(err => reject(err));
        } else {
          reject('User already exists');
        }
      });
    }));


  }

  public changeUsername(user: User, username: string) {

  }

}
