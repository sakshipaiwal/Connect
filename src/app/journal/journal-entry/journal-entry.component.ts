import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DiaryEntry } from './diaryEntryModel';
@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.css']
})
export class JournalEntryComponent implements OnInit {

  @Output() viewJournalListEmitter = new EventEmitter<boolean>();
  @Output() journalEmitter = new EventEmitter<DiaryEntry>();

  diaryEntry : DiaryEntry = {
    title : "",
    date : new Date(),
    message : ""
  };

  viewJournalList : boolean = true;
  constructor() { }

  onViewJournalList(){
    this.viewJournalList = false;
    this.viewJournalListEmitter.emit(this.viewJournalList);
    this.journalEmitter.emit(this.diaryEntry);
    console.log(this.diaryEntry);
  }
  ngOnInit(): void {
  }

}
