import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Game } from './game-list/game-list.component';
import { Observable } from 'rxjs';
import { User } from './register-template/register-template.component';

@Injectable({
  providedIn: 'root'
})
export class GamesDataService {
  private apiBaseUrl: string="http://localhost:3000/api";

  constructor(private http:HttpClient) { }

  public getGames(): Promise<Game[]>{
     const url:string=this.apiBaseUrl+"/games";
   
   return  this.http.get(url).toPromise()
              .then(response=>response as Game[])
              .catch(this.handleError);
  }

  public getGame(gameId:string): Promise<Game>{
    const url:string=this.apiBaseUrl+"/games/"+gameId;
 
  return  this.http.get(url).toPromise()
             .then(response=>response as Game)
             .catch(this.handleError);
 }


 public addUser(user:User): Observable<any> {
  const url:string=this.apiBaseUrl+"/register";
  const headers = { 'content-type': 'application/json'}  
  const body=JSON.stringify(user);
  console.log(body);
  return this.http.post(url,body,{'headers':headers});
             
}


  private handleError(error:any):Promise<any>{
    console.log("Error while calling get All games api",error);
    return Promise.reject(error.message || error);
  }

}


