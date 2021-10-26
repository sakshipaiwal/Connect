import { Injectable } from '@angular/core';
import { DiaryEntry } from 'src/app/journal/journal-entry/diaryEntryModel';
import { UrlService } from '../UrlService/url.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  parentUrl = "journal";

  entries : DiaryEntry[] = [];

  constructor(
    private urlService : UrlService,
    private http : HttpClient) 
    { }

  
  getAllDiaryEntries(){

    let childUrl = "journalView";
    let url = this.urlService.aggregator([this.parentUrl, childUrl]);

    


    this.http.get<DiaryEntry[]>(url).subscribe(data => {
      this.entries = data;
    },
    err => {
      console.log("Error- something is wrong!");

      this.http.get<DiaryEntry[]>(url).subscribe(data => {
        this.entries = data;
      },
      err => {
        console.log("Access denied");
      });

    });

    return this.entries;
  }

  addDiaryEntry(diaryEntry : DiaryEntry){

    let childUrl = "journalView";
    let url = this.urlService.aggregator([this.parentUrl, childUrl]);

    

    
    this.http.post<DiaryEntry[]>(url, diaryEntry).subscribe(data => {
      this.entries.push(diaryEntry);
    },
    err => {
      console.log("Error- something is wrong!");

      
      this.http.post<DiaryEntry[]>(url, diaryEntry).subscribe(data => {
        this.entries.push(diaryEntry);
      },
      err => {
        console.log("Access denied");
      });
      
    });
    
    return this.entries;

  }

  deleteDiaryEntry(diaryEntry : DiaryEntry){
    console.log("Deleting");
  }
}
