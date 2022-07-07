import { Component, OnInit } from '@angular/core';
import { Tarea } from './Tarea';


@Component({
    selector: 'app-list-from-input',
    templateUrl: './list-from-input.component.html',
    styleUrls: ['./list-from-input.component.css']
})

export class ListFromInputComponent implements OnInit {
    list:string[] = [];
    dateString: string = "2022-07-07";
    tarea:Tarea = new Tarea("asd", new Date(this.dateString + "T00:00:00-0600"));
    // tarea:Tarea = new Tarea("asd", new Date(this.dateString + "T00:00:00-0600"));

    constructor() { }

    ngOnInit(): void { }

    addElement(element: string) {
        if (element) {
            this.list.push(element);
        }
    }

    setDate(){
        this.tarea.date = new Date(this.dateString + "T00:00:00-0600");
    }
}
