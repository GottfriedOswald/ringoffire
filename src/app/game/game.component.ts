import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  cardGrabbed = false;
  constructor() { }

  ngOnInit(): void {
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
