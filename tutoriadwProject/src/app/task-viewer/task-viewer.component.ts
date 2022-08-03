import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ITask } from '../models/ITask';
import { ApiCommunicationService } from '../services/api-communication.service';
import { PathHandlerService } from '../services/path-handler.service';

import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
    selector: 'app-task-viewer',
    templateUrl: './task-viewer.component.html',
    styleUrls: ['./task-viewer.component.css']
})
export class TaskViewerComponent implements OnInit {
    columnsToDisplay:string[] = ["nombre", "descripcion", "fechaVencimiento", "estado"];
    tasks!:MatTableDataSource<ITask>;
    @ViewChild(MatSort) sort!: MatSort;


    constructor(private apiQueryHandler: ApiCommunicationService, private path: PathHandlerService) {
    }

    ngOnInit(): void {
        this.getTasks();
    }

    ngAfterViewInit() {
        this.tasks.sort = this.sort;
    }


    getTasks():void{
        let getTaskUrl:string = "http://backendtutoriadw.herokuapp.com/get/task/3GVx6bUV5RuHfmHUZG74nbk7cjUV33";
        this.apiQueryHandler.get(getTaskUrl).subscribe((response:any) =>{
            this.tasks = new MatTableDataSource(response);
        });
    }

    addTask():void{
        this.path.navigate('/task', 'add') 
    }

    onTaskSelected(task:ITask){
        this.path.navigate('/task/detail', (task._id).toString());
    }

}