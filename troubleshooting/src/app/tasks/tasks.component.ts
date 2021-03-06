import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITask } from './ITask';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
    taskList:ITask[] = [];
    task: ITask = {name:"", description:"", dueDate:""};

    constructor() { }

    ngOnInit(): void {

    }

    showTask(task:ITask):void{
        console.log(task);
    }

    // addToList():void{
    //     this.taskList.push(this.task);
    // }

    addToList(taskForm:NgForm):void{
        if(taskForm.valid){
            let task:ITask = {name:taskForm.value.taskName, description:taskForm.value.taskDescription, dueDate:taskForm.value.taskDueDate};
            this.taskList.push(task);
        }
        else{
            alert("Task must have at least date and name");
        }
    }
}
