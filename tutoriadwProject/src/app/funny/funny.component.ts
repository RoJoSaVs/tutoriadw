import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms'; // Reactive FORM


@Component({
    selector: 'app-funny',
    templateUrl: './funny.component.html',
    styleUrls: ['./funny.component.css']
})
export class FunnyComponent implements OnInit {
    // NG MODEL
    addTaskNgModel = {taskName:'', taskDescription:'', urgenciaString:'', taskFechaVencimiento:Date.now()};

    // Reactive FORM
    addTaskForm:FormGroup = new FormGroup(
        {
            taskName: new FormControl('', [Validators.required]),
            taskDescription: new FormControl('', [Validators.required, this.spaceNeeded, Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]),
            urgenciaString: new FormControl('', [Validators.required]),
            taskFechaVencimiento: new FormControl( '', [Validators.required])
        });

    constructor() { }

    ngOnInit(): void {
    }

    onSubmit():void{
        console.log(this.addTaskForm);   // Reactive FORM
        console.log(this.addTaskNgModel);   // NG MODEL
    }

    // Reactive FORM
    spaceNeeded(control: FormControl){
        if(control.value.indexOf(' ') == -1){
            return {spaceNeeded: true};
        }
        else{
            return null;
        }
    }

    // NG MODEL
    noSpaceAllowedNgModel(){
        if(this.addTaskNgModel.taskDescription.indexOf(" ") == -1){
            alert("Hola soy un error");
        }
        else{
            alert("Que divertido, funciona bien");
        }
    }

}
