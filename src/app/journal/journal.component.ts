import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StylingService } from '../services/commons/styling.service';


@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {  
  stylingService : StylingService;
  addJournal : boolean = false;
  constructor(stylingService : StylingService) {
    this.stylingService = stylingService;
  }

  onAddJournal(){
    this.addJournal = !this.addJournal;
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
