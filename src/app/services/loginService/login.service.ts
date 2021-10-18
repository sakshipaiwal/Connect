import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  createNewUser(){
    var user : any = "";
    var tokenId = "token " + localStorage.getItem('token');
    var baseUrl = "http://127.0.0.1:8000/users/signUp";
    this.http.post(baseUrl, user, {
      headers: new HttpHeaders({
        'Authorization': tokenId
      })
    })
    .subscribe(
      result => {
        console.log(result);
      },
      err => {
        console.log("Error- something is wrong!")
    });
  
  }
}
