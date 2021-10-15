import { Injectable } from '@angular/core';
import {TaskInterface } from 'src/app/tracker/dataStructures/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  timeCreated : Date;
  sampleTasks : TaskInterface[];

  fetchTasks() : TaskInterface[]{
    return this.sampleTasks;
  }

  constructor() { 
    this.timeCreated = new Date();
    this.timeCreated.setHours(23);
    this.timeCreated.setMinutes(0);
    this.timeCreated.setSeconds(0);
    this.timeCreated.setMilliseconds(0);

    this.sampleTasks = [
      {taskTitle : "play games", taskDescription : "win 3 matches this week", deadlineDate :this.timeCreated,taskType : "pending"},
      {taskTitle : "cook pasta", taskDescription : "It should taste good", deadlineDate : this.timeCreated, taskType : "pending"},
      {taskTitle : "cook pasta", taskDescription : "It should taste good", deadlineDate : this.timeCreated, taskType : "done"}
  
  ]

  }

}

