import { Component, OnInit } from '@angular/core';
import { IPersona } from './IPersona';
import { PersonaClass } from './PersonaClass';
import { ServicioService } from './servicio.service';

@Component({
    selector: 'app-form-ng-model',
    templateUrl: './form-ng-model.component.html',
    styleUrls: ['./form-ng-model.component.css']
})
export class FormNgModelComponent implements OnInit {
    personaInterface:IPersona = {name:"", age:0, id:"", address:""}; // Interfaz
    personaClass: PersonaClass = new PersonaClass("", 0, "", ""); // Class

    constructor(private client: ServicioService) { }

    ngOnInit(): void {
    }

    showInterface(){
        console.log(this.personaInterface);
    }

    showClass(){
        console.log(this.personaClass);
    }


    getMethodService(){
        this.client.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100').subscribe(data =>{
            console.log(data.results);
        });

        // this.client.getLocalLink().subscribe(data =>{
        //     console.log(data.results);
        // });
    }

}
