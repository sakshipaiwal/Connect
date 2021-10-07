import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'connect-frontend';
  hacked : Boolean = true;


  onForgive(){
    console.log("Hello")
    this.hacked = false;
  }
}
