import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Lobby} from '../../models/lobby';
import {AuthService} from '../core/auth.service';
import {HelperService} from '../core/helper.service';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {

  private LOBBY_PATH = 'lobby';

  constructor(private afFireStore: AngularFirestore, private authService: AuthService, private helpers: HelperService) { }

  public createLobby() {

    let lobbyCreated = false;

    while (!lobbyCreated) {
      // Generate a random room key
      const roomKey = Math.random().toString(36).substring(2, 5) +
        Math.random().toString(36).substring(2, 5);

      // Check if the room key already exists
      this.afFireStore.doc<Lobby>(`${this.LOBBY_PATH}/${roomKey}`).snapshotChanges()
        .subscribe(documentChangeAction => {
          const dataExists = documentChangeAction.payload.exists;
          if (dataExists === false) {

            const newLobby = new Lobby()
            documentChangeAction.payload.ref.set(null);

            lobbyCreated = true;
          }
        });
    }



  }

}
