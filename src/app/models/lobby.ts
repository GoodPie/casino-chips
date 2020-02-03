import {Player} from './player';
import {User} from 'firebase';

export class Lobby {
  constructor(
    public id: string,
    public creator: User,
    public members: Player[],
    public password?: string
  ) {}

  public ToFirebaseObject() {
    return {
      id: this.id,
      creator: this.creator,
      members: this.members,
      password: this.password
    };
  }

}

