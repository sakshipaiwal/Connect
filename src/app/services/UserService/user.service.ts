import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../UrlService/url.service';
import { LoginResponse } from '../response-structures/loginResponse';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private urlService : UrlService, private cookies : CookieService) { }

  parentUrl : string = "users";
  loginResponse : LoginResponse;

  signUp(tokenId : string){
    var user : any = "";
    tokenId = "token " + tokenId;
    var childUrl = "signUp";
    console.log(tokenId);
    var url = this.urlService.aggregator([this.parentUrl, childUrl]);
    this.http.post(url, user, {
      headers: new HttpHeaders({
        'Authorization': tokenId
      })
    })
    .subscribe(
      result => {
        console.log("Here is the result " + result);
        this.signIn(tokenId);
      },
      err => {
        console.log("Error- something is wrong!")
    });


  
  }

  signIn(tokenId : string){
    
    var childUrl = "login";
    var url = this.urlService.aggregator([this.parentUrl, childUrl]);
    var user = "";
    
    this.http.post<LoginResponse>(url, user, {
      headers: new HttpHeaders({
        'Authorization': tokenId
      })
    })
    .subscribe(
      result => {
        this.loginResponse = result;
        var accessToken = this.loginResponse.accessToken;
        localStorage.setItem('accessToken', accessToken);

        var refreshToken = this.cookies.get('refreshToken');
        localStorage.setItem('refreshToken', refreshToken);
      },
      err => {
        console.log("Error- something is wrong!")
    });

    

  }

}
