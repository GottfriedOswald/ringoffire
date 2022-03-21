import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  cardGrabbed = false;
  game: Game;
  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(){
    this.game = new Game();
    console.log(this.game);
  }

  //checks if game card is clicked
  takeCard() {
    if (this.cardGrabbed == true) {
      this.cardGrabbed = false;
    } else {
      this.cardGrabbed = true;
    }
  }
}
