import {Component, Inject, OnInit} from '@angular/core';
import {RandomColorService} from '../../services/random-color.service';
import {ActivatedRoute} from '@angular/router';
import {PlayerService} from '../../services/core/player.service';
import {AuthService} from '../../services/core/auth.service';
import {LobbyService} from '../../services/game/lobby.service';
import {Observable} from 'rxjs';
import {ILobby, Lobby} from '../../models/lobby';
import {Action, DocumentSnapshot} from '@angular/fire/firestore';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {NoLobbyFoundComponent} from '../no-lobby-found/no-lobby-found.component';
import {Player} from '../../models/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  // Show loading until data has loaded from the mainframe
  public loadingLobby = true;
  public loadingPlayer = true;

  // Lobby for current game
  public lobbyId: string;
  public lobby: Lobby;
  public currentPlayer: Player;


  constructor(randomColorService: RandomColorService, private routes: ActivatedRoute,
              private authService: AuthService, private lobbyService: LobbyService, private dialog: MatDialog) {

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

    this.authService.getSignedInPlayer().then(playerObs => {
      playerObs.subscribe(player => {
        this.loadingPlayer = false;
        this.currentPlayer = player;
      });
    });

  }

  public openLobbyNotFoundDialog() {
    this.dialog.open(NoLobbyFoundComponent, {
      data: { lobbyId: this.lobbyId }
    });
  }

  ngOnInit() {
  }

}
