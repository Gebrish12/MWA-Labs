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


 console.log(this.getGames); 
}

   public getGames():void{
     this.gamesDataService.getGames().then(Games=>this.games=Games);
                                     
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
designers!:string;
}
