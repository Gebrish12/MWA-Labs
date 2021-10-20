import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameListComponent } from './game-list/game-list.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { GameComponent } from './game/game.component';
import { GamesDataService } from './games-data.service';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GameListComponent,
    ErrorpageComponent,
    GameComponent,
    FooterComponent,
    NavigationComponent,
   
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
      path:"",
      component:WelcomeComponent
      },
      {
      path:"games",
      component:GameListComponent
      },
      {
        path:"game/:gameId",
        component:GameComponent
      },
      {
      path:"**",
      component:ErrorpageComponent
      }
  ])
  ],
  providers: [GamesDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
