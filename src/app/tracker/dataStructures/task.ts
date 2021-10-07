export interface TaskInterface{
    taskTitle : String,
    taskDescription : String,
    deadlineDate : Date

}



export let sampleTasks : TaskInterface[] = [
    {taskTitle : "play games", taskDescription : "win 3 matches this week", deadlineDate : new Date()},
    {taskTitle : "cook pasta", taskDescription : "It should taste good", deadlineDate : new Date()}

]