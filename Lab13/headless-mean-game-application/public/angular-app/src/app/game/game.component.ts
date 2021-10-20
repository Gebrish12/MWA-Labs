import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


import { Game } from '../game-list/game-list.component';
import { GamesDataService } from '../games-data.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game: Game= {} as Game;

  constructor(private gamesDataService:GamesDataService,private _route:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const gameId:string=this.route.snapshot.params.gameId;
    this.getGame(gameId);
  }

  deleteGame(gameId: string){
    this.gamesDataService.deleteGame(gameId).then(function(){console.log("deleted successfully")})
    .catch(this.handleError);;
  }
Games(){
  this._route.navigate(["games"])
}
  private getGame(gameId: string):void{
    this.gamesDataService.getGame(gameId).then((response)=>this.receivedGame(response))
                                         .catch(this.handleError);

  }

  private receivedGame(game:Game){
  console.log("Game received ", game);
  this.game=game;
  }

  private handleError(error:any){
    console.log("Error ",error);
    
  }

}

