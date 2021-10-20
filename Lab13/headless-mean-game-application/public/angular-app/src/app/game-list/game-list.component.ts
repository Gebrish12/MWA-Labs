import { Component, OnInit } from '@angular/core';

import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  
  game: Game= {} as Game;


games:Game[]=[];
constructor(private gamesDataService:GamesDataService) { }

ngOnInit(): void {
 this.getGames();
 this.addGame();

 console.log(this.getGames); 
}

   public getGames():void{
     this.gamesDataService.getGames().then(foundGames=>this.games=foundGames);
                                     
   }

   addGame() {
     this.gamesDataService.addGame(this.game)
       .subscribe(data => {
         console.log(data)
         // this.getGames();
       })      
   }

}
export class Game{
_id!:string;
title!:string;
rate!:number;
price!:number;
year!:number;
minPlayers!:number;
maxPlayers!:number;
//designers!:String

}