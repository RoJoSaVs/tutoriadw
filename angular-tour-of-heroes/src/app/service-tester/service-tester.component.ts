import { Component, OnInit } from '@angular/core';
import { Project } from './Project';
import { Test } from './Test';
import { CrudService } from '../crud.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-service-tester',
    templateUrl: './service-tester.component.html',
    styleUrls: ['./service-tester.component.css']
})
export class ServiceTesterComponent implements OnInit {

    response:any;
    listPokemon:Test[] = [];
    constructor(private crudService:CrudService, private http: HttpClient) { }

    ngOnInit(): void {
    }

    printPokemon(){
        this.crudService.readElement("1").subscribe(data => {
            console.log(data);
        });
    }

    getData(){
        this.http.get<Test>('http://localhost:5000/api/get').subscribe((data:Test) => {
            console.log(data);
            // this.listPokemon = data;
            // console.log(this.listPokemon);
        });
    }

}
