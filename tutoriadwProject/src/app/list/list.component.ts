import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { ApiCommunicationService } from '../services/api-communication.service';
import { IList } from '../models/IList';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ListComponent implements OnInit {
    lists: IList[] = [];
    idSelected: number = 0;
    clicked: boolean = false;
    closeResult: string = "";
    showAlert:boolean = false;
    @ViewChild(TaskListComponent) taskList!: TaskListComponent;

    constructor(private apiQueryHandler: ApiCommunicationService, private modalService: NgbModal) { }


    open(content:any) {
        this.modalService.open(content, { modalDialogClass: 'dark-modal' });
      }
    
    ngOnInit(): void {
        this.getListData();
    }


    getListData(): void {
        let getListUrl: string = "http://backendtutoriadw.herokuapp.com/get/list/3GVx6bUV5RuHfmHUZG74nbk7cjUV33";
        this.apiQueryHandler.get(getListUrl).subscribe(response => {
            response.forEach((element: any) => {
                let list = { nombreLista: element.nombre, categoriaLista: element._id };
                this.lists.push(list);
            });
        });
    }


    addList(listName:string):void {
        if(listName.length != 0){
            let postListUrl:string = "http://backendtutoriadw.herokuapp.com/add/list/3GVx6bUV5RuHfmHUZG74nbk7cjUV33"
            this.apiQueryHandler.post(postListUrl, {nombre:listName}).subscribe((response:any)=>{
                if(response == 0){
                    this.lists = [];
                    this.getListData();
                }
            });
        }
        else{
            this.showAlert = true;
        }
    }


    deleteList(list:IList):void{
        let deleteListUrl:string = "http://backendtutoriadw.herokuapp.com/delete/list/3GVx6bUV5RuHfmHUZG74nbk7cjUV33?_id=";
        this.apiQueryHandler.delete(deleteListUrl + list.categoriaLista).subscribe((response:any) =>{
            if(response == 0){
                this.lists = [];
                this.getListData();
            }
        });
    }


    loadTaskList(list: IList): void {
        this.idSelected = list.categoriaLista;
        this.clicked = true;
        this.taskList.getTaskList();
    }


}