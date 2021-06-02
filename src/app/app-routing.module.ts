import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesAboutComponent } from './games-about/games-about.component';
import { GamesContactComponent } from './games-contact/games-contact.component';
import { GamesNotFoundComponent } from './games-not-found/games-not-found.component';
import { GamesStoreComponent } from './games-store/games-store.component';

const routes: Routes = [
  { path: '',   redirectTo: '/store', pathMatch: 'full' },
  {path: 'store', component: GamesStoreComponent},
  {path: 'about', component: GamesAboutComponent},
  {path: 'contact', component: GamesContactComponent},
  { path: '**', component: GamesNotFoundComponent }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
