import { Component, OnInit } from '@angular/core';
import {RandomColorService} from '../../services/random-color.service';

@Component({
  selector: 'app-game-player',
  templateUrl: './game-player.component.html',
  styleUrls: ['./game-player.component.scss']
})
export class GamePlayerComponent implements OnInit {

  public username = 'test';

  // The current users chips
  public currentChips = 100;
  public currentBet = 50;

  public chipsWon = 50;
  public chipsLost = 50;

  public randomColorClass: string;

  constructor(randomColorService: RandomColorService) {
    this.randomColorClass = randomColorService.getRandomBackgroundColour();
  }

  ngOnInit() {
  }

}
