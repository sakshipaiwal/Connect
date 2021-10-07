import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StylingService } from '../services/commons/styling.service';
import { DiaryEntry } from './journal-entry/diaryEntryModel';


@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {  
  
  stylingService : StylingService;
  journalEntry : boolean = false;
  entries : DiaryEntry[] = [];
  constructor(stylingService : StylingService) {
    this.stylingService = stylingService;
  }

  onJournalEntry(){
    this.journalEntry = true;
  }

  onViewJournalList(viewJournalList : any){
    this.journalEntry = viewJournalList;
  }

  onAddJournal(diaryEntry : DiaryEntry){
    console.log(diaryEntry);
    this.entries.push(diaryEntry);
  }

  ngOnInit(): void {
  }

  // Styles
  getMainDivStyle(){
    let style = {
      marginLeft : this.stylingService.appMarginLeft,
      marginRight : this.stylingService.appMarginRight,
    }
    return style;
  }



}
