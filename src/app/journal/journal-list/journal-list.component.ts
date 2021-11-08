import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JournalService } from 'src/app/services/journalService/journal.service';
import { DiaryEntry } from '../journal-entry/diaryEntryModel';

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.css']
})
export class JournalListComponent implements OnInit {

  @Input() diaryEntry : DiaryEntry;
  @Output() outputDiaryEntry = new EventEmitter<DiaryEntry>();
  @Output() onViewJournalEmitter = new EventEmitter<boolean>();

  date : string;

  journalService : JournalService;

  constructor(journalService : JournalService) { 
    this.journalService = journalService;
  }

  onViewJournal(){
    this.outputDiaryEntry.emit(this.diaryEntry);
    this.onViewJournalEmitter.emit(true);
  }

  onDeleteDiaryEntry(){
    this.journalService.deleteDiaryEntry(this.diaryEntry);
  }
  
  ngOnInit(): void {
    this.date = String(this.diaryEntry.date);
  }

}
