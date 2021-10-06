import { Component, OnInit } from '@angular/core';
import { StylingService } from '../services/commons/styling.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
  stylingService : StylingService;
  constructor(stylingService : StylingService) {
    this.stylingService = stylingService;
   }

  ngOnInit(): void {
  }




  // styles go here

  getMainDivStyle(){
    let style = {
      marginLeft : this.stylingService.appMarginLeft,
      marginRight : this.stylingService.appMarginRight
    }
    return style;
  }

}
