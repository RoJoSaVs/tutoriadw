import { Component, OnInit } from '@angular/core';

import { IPokemon } from '../full-crud/IPokemon';
import { CrudService } from '../crud.service';

@Component({
    selector: 'app-crud',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

    constructor(private crud: CrudService) { }

    ngOnInit(): void {
    }

    getData():void{
        let getUrl:string = "https://tutoriadw.ronnysantamaria.repl.co/api/get";
        // this.client.get(getUrl).subscribe(response =>{
        //     console.log(response);
        // });
    }


    getSingle(name:string):void{
        let getUrl:string = "https://tutoriadw.ronnysantamaria.repl.co/api/get_single";
        // this.client.get(getUrl).subscribe(response =>{
        //     console.log(response);
        // });
    }


    postData(nameInput:string, urlInput:string):void{
        let postUrl:string = "https://tutoriadw.ronnysantamaria.repl.co/api/add";
        let pokemon:IPokemon = {name:nameInput, url:urlInput};
        // this.client.post(postUrl, pokemon).subscribe(response =>{
        //     console.log(response);
        // });
    }


    delete(name:string):void{
        let deleteUrl:string = "https://tutoriadw.ronnysantamaria.repl.co/api/delete?name=" + name;
        // this.client.delete(deleteUrl).subscribe(response =>{
        //     console.log(response);
        // });
    }


    putData(nameInput:string, urlInput:string):void{
        let putUrl:string = "https://tutoriadw.ronnysantamaria.repl.co/api/edit?name=" + nameInput;
        let pokemon:IPokemon = {name:"nameInput", url:urlInput};
        // this.client.put(putUrl, pokemon).subscribe(response =>{
        //     console.log(response);
        // });
    }

}
