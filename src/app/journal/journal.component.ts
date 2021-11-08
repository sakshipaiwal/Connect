import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StylingService } from '../services/commons/styling.service';
import { JournalService } from '../services/journalService/journal.service';
import { DiaryEntry } from './journal-entry/diaryEntryModel';


@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {  
  
  stylingService : StylingService;
  journalEntry : boolean = false;
  viewJournal : boolean = false;
  entries : DiaryEntry[] = [];
  journalService : JournalService;

  constructor(stylingService : StylingService, journalService : JournalService) {
    this.stylingService = stylingService;
    this.journalService = journalService;
    
  }

  diaryEntry : DiaryEntry = {
    title : "",
    date : new Date(),
    message : ""
  };

  onJournalEntry(){
    this.diaryEntry = {
      title : "",
      date : new Date(),
      message : ""
    };
    this.journalEntry = true;
    this.viewJournal = false;
  }

  onAddJournal(diaryEntry : DiaryEntry){
    console.log(diaryEntry);
    this.journalEntry = false;
    this.entries = this.journalService.addDiaryEntry(diaryEntry);
  }

  onViewJournalEntry(diaryEntry : DiaryEntry){
    this.diaryEntry = diaryEntry;
    this.journalEntry = true;
    this.viewJournal = true;
  }

  onViewJournalList(viewJournal : boolean){
    this.journalEntry = viewJournal;
  }

  ngOnInit(): void {
    console.log("here");
    this.journalService.getAllDiaryEntries().subscribe(data =>{
      this.entries = data;
    });
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
