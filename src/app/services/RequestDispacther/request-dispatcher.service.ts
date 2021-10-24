import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AccessTokenResponse } from '../response-structures/accessTokenRequestResponse';
import { UrlService } from '../UrlService/url.service';
import { UserService } from '../UserService/user.service';

@Injectable({
  providedIn: 'root'
})
export class RequestDispatcherService {

  parentUrl : string = "users";

  constructor(private http : HttpClient, 
    private urlService : UrlService,
    private userService : UserService,
    private router : Router) { }

  public requestDispatcher(){
    var childUrl = "refreshToken";
    var url = this.urlService.aggregator([this.parentUrl, childUrl]);
    this.http.post<AccessTokenResponse>(url, "").subscribe(data => {
      
      localStorage.setItem('accessToken', data['accessToken']);

    },
    err => {
      console.log("RefreshToken expired!");
      this.router.navigate(['home/login']);
    });
  }
}
