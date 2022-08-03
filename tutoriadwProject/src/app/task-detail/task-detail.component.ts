import { RepositionScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCommunicationService } from '../services/api-communication.service';

@Component({
    selector: 'app-task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['./task-detail.component.css']
})

export class TaskDetailComponent implements OnInit {
    taskId:number = 0;

    task:any;

    constructor(private apiQueryHandler: ApiCommunicationService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        let taskId = this.route.snapshot.paramMap.get("taskId") ||'0';
        this.taskId = parseInt(taskId);

        this.getTask();
    }

    getTask():void{
        let getTaskUrl:string = "http://backendtutoriadw.herokuapp.com/get/task/3GVx6bUV5RuHfmHUZG74nbk7cjUV33";
        this.apiQueryHandler.get(getTaskUrl).subscribe((response:any) =>{
            response.forEach((element:any) => {
                if(element._id == this.taskId){
                    this.task = element;
                    return;
                }
            });
        });
    }

    updateTaskToDataBase():void{
        let updateTaskUrl:string = "http://backendtutoriadw.herokuapp.com/edit/task/3GVx6bUV5RuHfmHUZG74nbk7cjUV33?_id=" + this.task._id;
        this.apiQueryHandler.put(updateTaskUrl, this.task).subscribe((response:any) =>{
            console.log(response);
        });
    }


    deleteTask():void{
        let deleteTaskUrl:string = "http://backendtutoriadw.herokuapp.com/delete/task/3GVx6bUV5RuHfmHUZG74nbk7cjUV33?_id=" + this.task._id;
        this.apiQueryHandler.delete(deleteTaskUrl).subscribe((response:any) =>{
            console.log(response);
        });
    }


}
