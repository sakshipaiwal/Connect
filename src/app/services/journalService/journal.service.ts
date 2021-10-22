import { Injectable } from '@angular/core';
import { DiaryEntry } from 'src/app/journal/journal-entry/diaryEntryModel';
import { UrlService } from '../UrlService/url.service';
import { HttpClient } from '@angular/common/http';
import { RequestDispatcherService } from '../RequestDispacther/request-dispatcher.service';
import { ifError } from 'assert';
import { GetRequestHandlerService } from '../RequestDispacther/get-request-handler.service';
import { PostRequestHandlerService } from '../RequestDispacther/post-request-handler.service';

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  parentUrl = "journal";

  entries : DiaryEntry[] = [];

  constructor(
    private urlService : UrlService,
    private http : HttpClient,
    private requestDispatcher : RequestDispatcherService,
    private getRequestHandler : GetRequestHandlerService<DiaryEntry[]>,
    private postRequestHandler : PostRequestHandlerService<DiaryEntry, DiaryEntry[]>) 
    { }

  
  getAllDiaryEntries(){

    let childUrl = "journalView";
    let url = this.urlService.aggregator([this.parentUrl, childUrl]);

    this.entries = this.getRequestHandler.getHandler(url);


    // this.http.get<DiaryEntry[]>(url).subscribe(data => {
    //   this.entries = data;
    // },
    // err => {
    //   console.log("Error- something is wrong!");
    //   this.requestDispatcher.requestDispatcher();

    //   this.http.get<DiaryEntry[]>(url).subscribe(data => {
    //     this.entries = data;
    //   },
    //   err => {
    //     console.log("Access denied");
    //   });

    // });

    return this.entries;
  }

  addDiaryEntry(diaryEntry : DiaryEntry){

    let childUrl = "journalView";
    let url = this.urlService.aggregator([this.parentUrl, childUrl]);

    this.postRequestHandler.postHandler(diaryEntry, url);

    this.entries.push(diaryEntry);
    // this.http.post<DiaryEntry[]>(url, diaryEntry).subscribe(data => {
    //   this.entries.push(diaryEntry);
    // },
    // err => {
    //   console.log("Error- something is wrong!");

    //   this.requestDispatcher.requestDispatcher();
    //   this.http.post<DiaryEntry[]>(url, diaryEntry).subscribe(data => {
    //     this.entries.push(diaryEntry);
    //   },
    //   err => {
    //     console.log("Access denied");
    //   });
      
    // });
    
    return this.entries;

  }

  deleteDiaryEntry(diaryEntry : DiaryEntry){
    console.log("Deleting");
  }
}
