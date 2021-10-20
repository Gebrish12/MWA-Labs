import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ValidateEqualModule } from 'ng-validate-equal';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameListComponent } from './game-list/game-list.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { GameComponent } from './game/game.component';
import { GamesDataService } from './games-data.service';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
// import { RegisterReactiveComponent } from './register-reactive/register-reactive.component';
import { RegisterTemplateComponent } from './register-template/register-template.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GameListComponent,
    ErrorpageComponent,
    GameComponent,
    FooterComponent,
    NavigationComponent,
    RegisterTemplateComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    ValidateEqualModule,
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
      path:"register",
      component:RegisterTemplateComponent
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
