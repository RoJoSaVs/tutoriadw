import { Component, OnInit } from '@angular/core';
import { IList } from '../models/IList';

import { ITask } from '../models/ITask';
import { ApiCommunicationService } from '../services/api-communication.service';


@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
    newTask:any = {
        _id:0,
        nombre: '',
        descripcion: '',
        urgenciaString: '',
        urgenciaNumber: 0,
        fechaVencimiento: '',
        estado: '',
        posicion: 0,
        datosContacto: '',
        Lista: {categoriaLista:0, nombreLista:''}};

    taskLists:IList[] = [];

    constructor(private apiQueryHandler: ApiCommunicationService) { }

    ngOnInit(): void {
        this.getList();
    }

    getList():void{
        let getListUrl: string = "http://backendtutoriadw.herokuapp.com/get/list/3GVx6bUV5RuHfmHUZG74nbk7cjUV33"; 
        this.apiQueryHandler.get(getListUrl).subscribe((response:any) =>{
            response.forEach((element:any) => {
                let list = {categoriaLista:element._id, nombreLista:element.nombre}
                this.taskLists.push(list);
                
            });
        });
    }
    
    addTaskToDataBase():void{
        let postTaskUrl:string = "http://backendtutoriadw.herokuapp.com/add/task/3GVx6bUV5RuHfmHUZG74nbk7cjUV33";
        console.log(this.newTask)
        this.apiQueryHandler.post(postTaskUrl, this.newTask).subscribe((response:any) =>{
            console.log(response);
        });
    }

    show(){
        console.log(this.newTask);
    }

}
