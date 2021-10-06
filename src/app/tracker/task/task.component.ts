import { Component, Inject, OnInit } from '@angular/core';
import { StylingService } from 'src/app/services/commons/styling.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskDescription : string;
  taskDuration : number;
  

  constructor(@Inject(String) taskDescription : string, @Inject(Number) taskDuration : number,stylingService : StylingService) {
  

  }

  ngOnInit(): void {
  }

}
