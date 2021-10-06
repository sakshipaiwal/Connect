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
  constructor(stylingService : StylingService) {
    this.stylingService = stylingService;



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
