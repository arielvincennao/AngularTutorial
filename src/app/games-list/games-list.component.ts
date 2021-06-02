import { Component, OnInit } from '@angular/core';
import { Game } from './game';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  games: Game[] = [
    {
      name: 'Lineage 2',
      category: 'MMORPG',
      price: 100,
      stock: 5,
      image: 'assets/img/lineage2.jpg',
      isOffer: true,
      quantity: 0,
    },
    {
      name: 'Laberyinthine',
      category: 'Horror/Puzzle',
      price: 100,
      stock: 0,
      image: 'assets/img/labyrinthine.png',
      isOffer: false,
      quantity: 0,
    },
    {
      name: 'CS:GO',
      category: 'Shooter',
      price: 100,
      stock: 10,
      image: 'assets/img/csgo.png',
      isOffer: true,
      quantity: 0,
    },
    {
      name: 'Star Wars Battlefront',
      category: 'Shooter',
      price: 100,
      stock: 0,
      image: 'assets/img/starwars.jpeg',
      isOffer: false,
      quantity: 0,
    },
    {
      name: 'Fall guys',
      category: 'Battle royale',
      price: 100,
      stock: 8,
      image: 'assets/img/fallguys.png',
      isOffer: true,
      quantity: 0,
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }


  upQuantity(game: Game): void{
    if(game.stock > game.quantity){
      game.quantity++;
    }
  }

  downQuantity(game: Game): void{
    if(game.quantity > 0){
    game.quantity--;
    }
  }

  changeQuantity(event: { key: any; }, game: Game): void{
    if(event.key > 0 && event.key <= game.stock){
      game.quantity = event.key;    //VALIDO
   }else{
     game.quantity = game.stock;    //INVALIDO
   }
  }

}
