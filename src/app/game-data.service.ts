import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Game } from './games-list/game';

const URL = 'https://60c3697f2df2cb00178ab1b0.mockapi.io/games';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  
  games: Game[] = [];

  constructor(private http: HttpClient) {
    this.getAll().subscribe(games => {
      console.log(games);
      this.games = games}); 
  }
  
  public getGames() {
      return of(this.games);    
  }

  private getAll(): Observable<Game[]> {
    return this.http.get<Game[]>(URL)     
      .pipe(
        tap((games: Game[]) => games.forEach(game => game.quantity = 0) ));
  };

}

