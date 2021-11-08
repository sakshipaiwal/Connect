import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) { }

  onViewJournal(){
    this.router.navigate(['home/journal'])
  }

  onViewTracker(){
    this.router.navigate(['home/tracker'])
  }
  ngOnInit(): void {
  }

}
