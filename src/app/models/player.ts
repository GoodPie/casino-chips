export class Player {

  constructor(
    public id: string,
    public username: string,
    public email: string,
    public bannerColor: string,
    public chips: number
  ) {}

  public static ToFirebaseObject(p: Player) {
    const playerInterface: IPlayer = {
      id: p.id,
      username: p.username,
      email: p.email,
      bannerColor: p.bannerColor,
      chips: p.chips
    };

    return playerInterface;
  }
}

export interface IPlayer {

  id: string;
  username: string;
  email: string;
  bannerColor: string;
  chips: number;

}
