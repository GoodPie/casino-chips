import { Component, OnInit } from '@angular/core';
import {LobbyService} from '../../services/game/lobby.service';
import {Observable} from 'rxjs';
import {Lobby} from '../../models/lobby';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  public lobbyList: Observable<Lobby[]>;

  constructor(private lobbyService: LobbyService, private router: Router) {
    this.lobbyList = lobbyService.GetAllLobbies();
    this.lobbyList.subscribe();
  }

  ngOnInit() {
  }

  public createLobby() {
    this.lobbyService.createLobby();
  }

  public goToLobby(id: string) {
    this.router.navigate(['play', id]);
  }
}
