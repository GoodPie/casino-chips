import {IPlayer, Player} from './player';
import {User} from 'firebase';

export class Lobby {
  constructor(
    public id: string,
    public creator: Player,
    public members: Player[],
    public password?: string
  ) {}

  public static ToFirebaseObject(lobby: Lobby) {

    const creatorObj = Player.ToFirebaseObject(lobby.creator);
    const iMembers: IPlayer[] = [];
    if (lobby.members) {
      for (let i = 0; i < lobby.members.length; i++) {
        iMembers[i] = Player.ToFirebaseObject(lobby.members[i]);
      }
    }

    const lobbyInterface = {
      id: lobby.id,
      creator: creatorObj,
      members: iMembers,
      password: lobby.password ? lobby.password : ''
    };

    return lobbyInterface;
  }

}

export interface ILobby {

  id: string;
  player: IPlayer;
  members: IPlayer[];
  password: string;

}

