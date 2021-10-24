import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  public baseUrl : string = "http://127.0.0.1:8000";

  public aggregator(tokens : string[]){
    let constructedUrl = this.baseUrl;
    tokens.forEach(token => {
      constructedUrl = constructedUrl + "/" + token;
    });

    return constructedUrl;
  }

}
