import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../service-tester/Volunteer';

@Component({
    selector: 'app-form-test',
    templateUrl: './form-test.component.html',
    styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    
    getDataForm(name:string, ageS:string, country:string){
        let age:number = parseInt(ageS);
        let volunteer:Volunteer = {name: name, age: age, country: country, type: "volunteer"};
        console.log(volunteer);
    }

}
