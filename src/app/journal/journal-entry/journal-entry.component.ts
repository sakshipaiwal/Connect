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

  onAddJournalList(){
    this.journalEmitter.emit(this.diaryEntry);
    var d = String(this.diaryEntry.date);
    console.log(d.slice(0,10));
  }
  
  ngOnInit(): void {
  }

}
