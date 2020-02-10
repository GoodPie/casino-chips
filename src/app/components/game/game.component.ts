import { Component, OnInit } from '@angular/core';
import {Lobby} from '../../models/lobby';
import {LobbyService} from '../../services/game/lobby.service';
import {ActivatedRoute} from '@angular/router';
import {NoLobbyFoundComponent} from '../no-lobby-found/no-lobby-found.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public loadingLobby = true;

  public currentPool = 0;

  public lobbyId: string;
  public lobby: Lobby;



  constructor(private routes: ActivatedRoute, private lobbyService: LobbyService, private dialog: MatDialog) {

    this.lobbyId = this.routes.snapshot.params.id;
    this.lobbyService.GetLobby(this.lobbyId).subscribe(snapShot => {
      if (snapShot.payload.exists) {
        // Data has been loaded so we good
        this.loadingLobby = false;
        this.lobby = snapShot.payload.data() as Lobby;
      } else {
        // Unable to find lobby
        this.openLobbyNotFoundDialog();
      }
    });
  }

  ngOnInit() {
  }

  public getCurrentPool() {
    let currentPool = 0;
    this.lobby.members.map(p => currentPool += p.chips);
    return currentPool;
  }

  public openLobbyNotFoundDialog() {
    this.dialog.open(NoLobbyFoundComponent, {
      data: { lobbyId: this.lobbyId }
    });
  }
}
