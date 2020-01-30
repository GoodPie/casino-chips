import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {

  constructor(private afFireStore: AngularFirestore) { }

  public createLobby() {
    // Generate a random room key
    const roomKey = Math.random().toString(36).substring(2, 5) +
      Math.random().toString(36).substring(2, 5);

    // Check if the room key already exists

  }

}
