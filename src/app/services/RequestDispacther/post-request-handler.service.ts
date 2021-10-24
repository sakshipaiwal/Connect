import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestDispatcherService } from './request-dispatcher.service';

@Injectable({
  providedIn: 'root'
})
export class PostRequestHandlerService<RequestType, ResponseType> {

  constructor(private http : HttpClient,
    private getAccessToken : RequestDispatcherService) { }

  postHandler(req : RequestType, url : string){
    this.http.post<ResponseType>(url, req).subscribe(data => {
      console.log("Success");
    },
    err => {
      console.log("Error- something is wrong!");

      this.getAccessToken.requestDispatcher();
      this.http.post<ResponseType>(url, req).subscribe(data => {
        console.log("Success after getting new accessToken");
      },
      err => {
        console.log("Access denied");
      });
      
    });
  }
}
