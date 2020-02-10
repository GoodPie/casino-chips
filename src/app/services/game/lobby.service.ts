import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Lobby} from '../../models/lobby';
import {AuthService} from '../core/auth.service';
import {HelperService} from '../core/helper.service';
import {combineLatest, merge, Observable} from 'rxjs';
import {map, mapTo} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {

  private LOBBY_PATH = 'lobby';

  constructor(private afFireStore: AngularFirestore, private authService: AuthService) { }

  public createLobby() {

    // Generate a random room key
    const roomKey = Math.random().toString(36).substring(2, 5) +
      Math.random().toString(36).substring(2, 5);

    const roomRef = this.afFireStore.doc<Lobby>(`${this.LOBBY_PATH}/${roomKey}`).snapshotChanges();
    combineLatest(roomRef, this.authService.loggedInPlayer)
      .subscribe(([roomChangeAction, player]) => {
        const roomExists = roomChangeAction.payload.exists;
        if (roomExists === false)  {
          const newLobby = new Lobby(roomKey, player, []);

          // Create the lobby in Firebase
          this.afFireStore.collection<Lobby>(this.LOBBY_PATH).doc(roomKey).set(Lobby.ToFirebaseObject(newLobby))
            .then(() => alert('Created new lobby: ' + roomKey))
            .catch((error) => console.error(`Failed to create a lobby: ${error}`));
        } else {
          // Try again with a new random ID and hope that we don't hit the recursion limit :)
          this.createLobby();
        }
       });
  }


  public GetLobby(roomKey: string) {
    return this.afFireStore.doc<Lobby>(`${this.LOBBY_PATH}/${roomKey}`).snapshotChanges();
  }

  public GetAllLobbies(): Observable<Lobby[]> {
    return this.afFireStore.collection<Lobby>(`${this.LOBBY_PATH}`).valueChanges();
  }

}
