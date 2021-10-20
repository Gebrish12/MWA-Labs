import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GamesDataService } from '../games-data.service';


@Component({
  selector: 'app-register-template',
  templateUrl: './register-template.component.html',
  styleUrls: ['./register-template.component.css']
})
export class RegisterTemplateComponent implements OnInit {
  
  user: User= {} as User;
  

  constructor(private gamesDataService:GamesDataService) { }

  ngOnInit(): void {
    this.addUser;
    
  }
  addUser() {
this.gamesDataService.addUser(this.user).subscribe(data => {
  console.log(data)
  
})      
}

onClear(){
 this.user ={
   name:"",
   username:"",
   password:"",
   repeatpassword:""
 }
}
}
export class User {
   name !:String;
   username !:String;
   password !:String;
   repeatpassword !:String;
}
