import { Component, OnInit } from '@angular/core';
import { GameCartService } from '../game-cart.service';
import { GameDataService } from '../game-data.service';
import { Game } from './game';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  games: Game[] = [];

  constructor(
    private cart: GameCartService,
     private gamesService: GameDataService
     ) {

   }

  ngOnInit(): void {
    this.gamesService.getAll().subscribe(games => this.games = games);
    
  }

  addToCart(game: any): void {
    this.cart.addToCart(game);
    game.stock -= game.quantity;
    game.quantity = 0;
  }

}
