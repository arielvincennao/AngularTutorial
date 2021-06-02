import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GamesListComponent } from './games-list/games-list.component';

import { FormsModule } from '@angular/forms';
import { GamesAboutComponent } from './games-about/games-about.component';
import { GamesStoreComponent } from './games-store/games-store.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { GamesContactComponent } from './games-contact/games-contact.component';
import { GamesNotFoundComponent } from './games-not-found/games-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    GamesAboutComponent,
    GamesStoreComponent,
    CartComponent,
    GamesContactComponent,
    GamesNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
