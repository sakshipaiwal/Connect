import { CurrencyPipe } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { StylingService } from 'src/app/services/commons/styling.service';
import { TaskService } from 'src/app/services/taskService/task.service';
import { TaskInterface } from '../dataStructures/task';
import { TimeDiff } from '../dataStructures/timeDiff';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task : TaskInterface;

  timeRemaining: TimeDiff = new TimeDiff(0);
  constructor(stylingService : StylingService) {
  }

  
  

  ngOnInit(): void {

    setInterval( () => {
      let currentTime = new Date();
      let taskDeadline = this.task.deadlineDate;
      let difference : number = taskDeadline.getTime() - currentTime.getTime();
      this.timeRemaining = new TimeDiff(difference);
    } ,1000)
    
    
  } 

}
