import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { GameCartService } from '../game-cart.service';
import { Game } from '../games-list/game';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList$!: Observable<Game[]>;
  
  constructor(private cart: GameCartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
