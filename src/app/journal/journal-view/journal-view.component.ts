import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DiaryEntry } from '../journal-entry/diaryEntryModel';

@Component({
  selector: 'app-journal-view',
  templateUrl: './journal-view.component.html',
  styleUrls: ['./journal-view.component.css']
})
export class JournalViewComponent implements OnInit {

  @Output() viewJournalList = new EventEmitter<boolean>();
  @Input() diaryEntry : DiaryEntry;
  
  constructor() { }

  onViewJournalList(){
    this.viewJournalList.emit(false);
    console.log(this.diaryEntry);
  }

  ngOnInit(): void {
  }

}
