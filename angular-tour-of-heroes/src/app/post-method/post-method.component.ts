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

    addData(){
        let volunteer:Volunteer = {name: "josue", age: 22, country: "CR", type: "volunteer"};

        this.http.post('https://tutoriadw.ronnysantamaria.repl.co/api/add', volunteer).subscribe(data => {
            console.log(data);
        });
    }

}
