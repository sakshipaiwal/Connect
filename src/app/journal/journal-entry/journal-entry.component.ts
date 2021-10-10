import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DiaryEntry } from './diaryEntryModel';
@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.css']
})
export class JournalEntryComponent implements OnInit {

 
  @Output() journalEmitter = new EventEmitter<DiaryEntry>();
  @Input() diaryEntry : DiaryEntry;


  constructor() { }

  onViewJournalList(){
    this.journalEmitter.emit(this.diaryEntry);
    console.log(this.diaryEntry);
  }
  
  ngOnInit(): void {
  }

}
