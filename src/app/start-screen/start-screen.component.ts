import { Game } from './../../models/game';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'],
})
export class StartScreenComponent implements OnInit {
  //sieht aus als ob im Konstruktor eine Variable erstellt wird und dieser der "Router" zugewiesen wird
  constructor(private firestore: AngularFirestore, private router: Router) {}

  ngOnInit(): void {}

  newGame() {
    let game = new Game();
    this.firestore
      .collection('games')
      .add(game.toJson())
      .then((gameInformation: any) => {
        this.router.navigateByUrl('game/' + gameInformation.id);
      });

    this.router.navigateByUrl('game');
  }
}
