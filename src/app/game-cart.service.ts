import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from './games-list/game';

@Injectable({
  providedIn: 'root'
})


  //logica del carrito

export class GameCartService {

  private _cartList: Game [] = [];
  cartList: BehaviorSubject<Game[]> = new BehaviorSubject(this._cartList); //Notificar los cambios
  
  constructor() { }

  addToCart(game: Game) {
    let item = this._cartList.find((v1) => v1.name == game.name);
    if(!item){
      this._cartList.push({... game});  //Clona el objeto
    }else{
      item.quantity += game.quantity;
    }

    console.log(this._cartList);
    this.cartList.next(this._cartList); //Actualizar - observable
  }

}
