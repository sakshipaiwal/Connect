import { Component, OnInit } from '@angular/core';
import { StylingService } from '../services/commons/styling.service';
import { TaskService } from '../services/taskService/task.service';
import { TaskInterface } from './dataStructures/task';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
  stylingService : StylingService;
  taskService : TaskService;
  
  taskList : TaskInterface[] = [];

  constructor(stylingService : StylingService,taskService : TaskService) {
    this.stylingService = stylingService;
    this.taskService = taskService;
   }

  ngOnInit(): void {
    this.taskList = this.taskService.fetchTasks();

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
