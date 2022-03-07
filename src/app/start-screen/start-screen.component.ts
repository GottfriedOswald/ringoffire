import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  //sieht aus als ob im Konstruktor eine Variable erstellt wird und dieser der "Router" zugewiesen wird
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  newGame(){
    //Start a new game
    //hier wird nun die im Konstruktor erstellte Variable verwendet
    this.router.navigateByUrl('game');
  }
}
