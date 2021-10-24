import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Interface } from 'readline';
import { RequestDispatcherService } from './request-dispatcher.service';

@Injectable({
  providedIn: 'root'
})

export class GetRequestHandlerService<ResponseType> {

  emptyData : ResponseType;

  constructor(private http : HttpClient,
    private getAccessToken : RequestDispatcherService,
    private router : Router) { }

  getHandler(url : string) : ResponseType{

    this.http.get<ResponseType>(url).subscribe(data => {
      return data;
    },
    err => {
      this.getAccessToken.requestDispatcher();
      this.http.get<ResponseType>(url).subscribe(data => {
        return data;
      },
      err => {
        console.log("Access Denied!");
        this.router.navigate(['home/login']);
        
      });
    });
    return this.emptyData;
  }
}
