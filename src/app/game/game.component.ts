import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from './../dialog-add-player/dialog-add-player.component';
import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  cardGrabbed = false;
  game: Game;

  //eine Variable vom Typ string erstellen die eine Spielkarte aus dem Array (stack) speichert.
  currendCard: string = '';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.newGame();
  }

  gameLogConsole() {
    console.log(this.game);
  }

  newGame() {
    this.game = new Game();
    this.gameLogConsole();
  }

  //checks if game card is clicked
  takeCard() {
    if (this.cardGrabbed == true) {
      this.setGrabbedCardAsFalse();
    } else {
      this.setGrabbedCardAsTrue();
      this.setCurrendCard();
      this.gameLogConsole();
      setTimeout(() => {
        this.setCurrendCardToPlayedCards();
        this.setGrabbedCardAsFalse();
        this.setNextPlayer();
      }, 1000);
    }
  }

  setNextPlayer(){
    if (this.game.currentPlayer < 0 || this.game.currentPlayer >= (this.game.players.length-1)) {
      this.game.currentPlayer = 0;
    }else{
      this.game.currentPlayer++;
    }
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name != '') {
        this.game.players.push(name);
      }
    });
  }

  setGrabbedCardAsFalse() {
    this.cardGrabbed = false;
  }

  setGrabbedCardAsTrue() {
    this.cardGrabbed = true;
  }

  setCurrendCard() {
    if (!this.checkAmountCardsInStack) {
      this.currendCard = undefined;
    } else {
      this.currendCard = this.game.stack.pop();
    }
  }

  setCurrendCardToPlayedCards() {
    if (this.currendCard !== undefined) {
      this.game.playedCards.push(this.currendCard);
    } else {
      alert('Sorry, no more Cards in Stack!');
    }
  }

  checkAmountCardsInStack() {
    let amount = this.game.stack.length;
    if (amount < 1) {
      return true;
    } else {
      return false;
    }
  }
}
