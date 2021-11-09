import { Component, DoCheck } from '@angular/core';
import { UserService } from './services/UserService/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'connect-frontend';
  hacked : Boolean = true;

  ifLogin : Boolean = false;

  constructor(
    private userService : UserService
  ){ 

  }

  onForgive(){
    console.log("Hello")
    this.hacked = false;
  }

  ngDoCheck(){
    
    var accessToken = localStorage.getItem('accessToken');
    
    if(accessToken)
      this.ifLogin = true;
  }
}
