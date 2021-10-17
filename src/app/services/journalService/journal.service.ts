import { Injectable } from '@angular/core';
import { DiaryEntry } from 'src/app/journal/journal-entry/diaryEntryModel';


@Injectable({
  providedIn: 'root'
})
export class JournalService {

  entries : DiaryEntry[] = [];
  constructor() { }

  getAllDiaryEntries(){
    return this.entries;
  }

  addDiaryEntry(diaryEntry : DiaryEntry){
    this.entries.push(diaryEntry);
    return this.entries;
  }

  deleteDiaryEntry(diaryEntry : DiaryEntry){
    console.log("Deleting");
  }
}
