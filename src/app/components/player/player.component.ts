import { Component, OnInit } from '@angular/core';
import {RandomColorService} from '../../services/random-color.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  public username = 'Test User';
  public backgroundColor: string;
  public currentBid = 50;
  public totalChips = 100;

  constructor(randomColorService: RandomColorService) {
    this.backgroundColor = randomColorService.getRandomBackgroundColour();
  }

  ngOnInit() {
  }

}
