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

  diaryEntry : DiaryEntry = {
    title : "",
    date : new Date(),
    message : ""
  };

  onJournalEntry(){
    this.journalEntry = true;
  }

  

  onAddJournal(diaryEntry : DiaryEntry){
    console.log(diaryEntry);
    this.diaryEntry = {
      title : "",
      date : new Date(),
      message : ""
    };
    this.journalEntry = false;
    this.entries.push(diaryEntry);
  }

  onViewJournal(diaryEntry : DiaryEntry){
    this.diaryEntry = diaryEntry;
    this.journalEntry = true;
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
