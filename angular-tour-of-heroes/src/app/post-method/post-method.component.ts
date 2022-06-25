import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Volunteer} from '../service-tester/Volunteer';


@Component({
    selector: 'app-post-method',
    templateUrl: './post-method.component.html',
    styleUrls: ['./post-method.component.css']
})
export class PostMethodComponent implements OnInit {

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
    }

    addData(name:string, country:string, age:string){
        let ageN:number = parseInt(age);
        let volunteer:Volunteer = {name: name, age: ageN, country: country, type: "volunteer"};
        // console.log(volunteer);
        this.http.post('https://tutoriadw.ronnysantamaria.repl.co/api/add', volunteer).subscribe(data => {
            console.log(data);
        });
    }

}
