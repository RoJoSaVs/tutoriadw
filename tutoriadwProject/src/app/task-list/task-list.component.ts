import { Component, Input, OnInit } from '@angular/core';

import { ApiCommunicationService } from '../services/api-communication.service';
import { ITask } from '../models/ITask';


@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    @Input() listId:number = 0;

    taskList:ITask[] = [];

    constructor(private apiQueryHandler: ApiCommunicationService) { }

    ngOnInit(): void {
        // console.log("loaded");
        // this.getTaskList();
    }


    getTaskList(){
        this.taskList = [];
        let getTaskUrl:string = "http://backendtutoriadw.herokuapp.com/get/task/3GVx6bUV5RuHfmHUZG74nbk7cjUV33";
        this.apiQueryHandler.get(getTaskUrl).subscribe((response:any) =>{
            response.forEach((element:any) => {
                if (parseInt(element.Lista.categoriaLista) == this.listId){
                    this.taskList.push(element);
                }
            });
        });

    }

}
