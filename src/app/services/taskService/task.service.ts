import { Injectable } from '@angular/core';
import { sampleTasks, TaskInterface } from 'src/app/tracker/dataStructures/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  fetchTasks() : TaskInterface[]{
    return sampleTasks;
  }

  constructor() { }
}
