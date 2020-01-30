import {Player} from './player';

export class Lobby {

  public id: string;
  public creator: Player;
  public members: Player[];
  public password: string;

  constructor(id, creator, password = null) {
    this.id = id;
    this.creator = creator;
    this.password = password;
    this.members = [creator];
  }

}
