import { Injectable } from '@angular/core';
import {User} from 'firebase';
import {AngularFirestore} from '@angular/fire/firestore';
import {HelperService} from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private afFirestore: AngularFirestore, private helpers: HelperService) { }

  public createUser(user: User, username?: string) {

  }

  public changeUsername(user: User, username: string) {

  }

}
