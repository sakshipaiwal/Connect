import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../UrlService/url.service';
import { LoginResponse } from '../response-structures/loginResponse';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, 
    private urlService : UrlService, 
    private cookies : CookieService,
    private router : Router) { }

  parentUrl : string = "users";
  public ifLogin : Boolean = false;

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
        localStorage.setItem('accessToken', result.accessToken);
        localStorage.setItem('refreshToken', this.cookies.get('refreshToken'));
        this.ifLogin = true;
        this.router.navigate(['/home']);
      },
      err => {
        console.log("Error- something is wrong!")
    });

  }

}
