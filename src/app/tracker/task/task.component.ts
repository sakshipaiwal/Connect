import { Component, Inject, Input, OnInit } from '@angular/core';
import { StylingService } from 'src/app/services/commons/styling.service';
import { TaskService } from 'src/app/services/taskService/task.service';
import { TaskInterface } from '../dataStructures/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task : TaskInterface;


  constructor(stylingService : StylingService) {
  }

  ngOnInit(): void {
  }

}
