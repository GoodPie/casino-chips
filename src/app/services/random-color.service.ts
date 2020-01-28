import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomColorService {

  public backgroundColours = [
    'bg-blue-gray',
    'bg-purple',
    'bg-pink',
    'bg-yellow',
    'bg-brown',
    'bg-cyan',
    'bg-blue',
    'bg-deep-purple',
    'bg-deep-orange'
  ];

  public backgroundColourPool = [];

  constructor() {
    this.backgroundColourPool = this.backgroundColours;
  }

  public getRandomBackgroundColour() {
    const choice = Math.floor(Math.random() * this.backgroundColours.length);
    return this.backgroundColours[Math.floor(Math.random() * this.backgroundColours.length)];
  }
}
