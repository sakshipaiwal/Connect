import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {TaskInterface } from 'src/app/tracker/dataStructures/task';
import { UrlService } from '../UrlService/url.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  timeCreated : Date;
  sampleTasks : TaskInterface[];
  parentUrl = "tracker";
  
  fetchTasks() : TaskInterface[]{
    return this.sampleTasks;
  }

  constructor(
    private urlService : UrlService,
    private http : HttpClient
  ) { 
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


  getAllTasks(){
    let childUrl = "taskView";
    let url = this.urlService.aggregator([this.parentUrl, childUrl]);
    return this.http.get<TaskInterface[]>(url);
  }

  addTask(task : TaskInterface){
    
    let childUrl = "taskView";
    let url = this.urlService.aggregator([this.parentUrl, childUrl]);
     this.http.post<TaskInterface>(url, task).subscribe(data => {
      this.sampleTasks.push(data);
    },
    err => {
      console.log(err);
    });
    return this.sampleTasks;

  }

}

