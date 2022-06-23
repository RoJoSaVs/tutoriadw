import { Component, OnInit } from '@angular/core';
import { Project } from './Project';
import { Volunteer } from './Volunteer';
import { CrudService } from '../crud.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-service-tester',
    templateUrl: './service-tester.component.html',
    styleUrls: ['./service-tester.component.css']
})
export class ServiceTesterComponent implements OnInit {

    listGet:Project[] = [];


    constructor(private crudService:CrudService, private http: HttpClient) { }

    ngOnInit(): void {
    }

    printPokemon(){
        this.crudService.readElement("1").subscribe(data => {
            console.log(data);
        });
    }

    getData(){
        this.http.get<any>('https://tutoriadw.ronnysantamaria.repl.co/api/get').subscribe((data:any) => {
            let listProjects: Project[] = data;
            this.listGet = listProjects.filter(element => element.type == 'project');
            console.log(this.listGet);
        });
    }

    addVolunteer(){
        let volunteer:Volunteer = {name: "ronny", age: 22, country: "Costa Rica", type: "volunteer"};
        // this.http.post<Volunteer>("https://tutoriadw.ronnysantamaria.repl.co/api/add", volunteer).subscribe(data=>
        this.http.post<Volunteer>("http://localhost:5000/api/add", volunteer).subscribe(data=>
        {
            console.log(data);
        });
    }

    addVolunteerService(){
        let volunteer:Volunteer = {name: "ronny", age: 22, country: "Costa Rica", type: "volunteer"};
        this.crudService.createElement(volunteer).subscribe(data => {
            console.log(data);
        })
    }
}
