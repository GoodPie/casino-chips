import { Component, OnInit } from '@angular/core';
import {LobbyService} from '../../services/game/lobby.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  constructor(private lobbyService: LobbyService) { }

  ngOnInit() {
  }

  public createLobby() {
    console.log("Test");
    this.lobbyService.createLobby();
  }

}
