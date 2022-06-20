import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
    selector: 'app-service-tester',
    templateUrl: './service-tester.component.html',
    styleUrls: ['./service-tester.component.css']
})
export class ServiceTesterComponent implements OnInit {

    response:any;
    listPokemon:any;
    constructor(private crudService:CrudService) { }

    ngOnInit(): void {
    }

    printPokemon(){
        this.crudService.readElement("1").subscribe(data => {
            console.log(data);
        });
    }

}
