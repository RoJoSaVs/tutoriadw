import { Component, OnInit } from '@angular/core';

import { IPokemon } from './IPokemon';
import { CrudService } from '../crud.service';

@Component({
    selector: 'app-full-crud',
    templateUrl: './full-crud.component.html',
    styleUrls: ['./full-crud.component.css']
})
export class FullCrudComponent implements OnInit {
    pokemonList:IPokemon[] = [];
    pokemon:IPokemon = {name:"", url:""};

    constructor(private crud: CrudService) { }

    ngOnInit(): void {
    }

    get():void{
        let getUrl:string = "http://localhost:5000/api/get";
        this.crud.readElement(getUrl).subscribe(response =>{
            this.pokemonList = response;
        });
        console.log("get");
    }

    getSingle(pokemonName:string):void{
        let getUrl:string = "http://localhost:5000/api/get_single";
        this.crud.getSingle(getUrl, "name", pokemonName).subscribe(response =>{
            this.pokemon.name = response.name;
            this.pokemon.url = response.url;
            console.log(response);
        });
        console.log("get single");
    }

    add(pokemonName:string, pokemonUrl:string):void{
        let postUrl:string = "http://localhost:5000/api/add";

        let pokemonAdd:IPokemon = {name:pokemonName, url:pokemonUrl};
        this.crud.createElement(postUrl, pokemonAdd).subscribe(response =>{
            console.log(response);
        })
        console.log("add");
    }


    put(pokemonName:string, newPokemonUrl:string):void{
        let editPokemonData:IPokemon = {name:pokemonName, url:newPokemonUrl};

        let putUrl:string = "http://localhost:5000/api/edit"
        this.crud.updateElement(putUrl, "name", pokemonName, editPokemonData).subscribe(response =>{
            console.log(response);
        });
        console.log("put");
    }

    delete(pokemonName:string):void{
        let deleteUrl:string = "http://localhost:5000/api/delete";
        this.crud.deleteElement(deleteUrl, "name", pokemonName).subscribe(response =>{
            console.log(response);
        });
        console.log("delete");
    }

}
