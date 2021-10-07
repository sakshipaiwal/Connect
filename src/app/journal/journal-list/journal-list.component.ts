import { Component, Input, OnInit } from '@angular/core';
import { DiaryEntry } from '../journal-entry/diaryEntryModel';

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.css']
})
export class JournalListComponent implements OnInit {

  @Input() diaryEntry : DiaryEntry;


  entry : string = "iernvcuier ricneri c ci eroierc erjc oier cre cre c rei cjier cerc re c rcui erc erc ijer  cuier curie";
  displayEntry : string = this.entry.slice(0,50);
  constructor() { }

  ngOnInit(): void {
  }

}
