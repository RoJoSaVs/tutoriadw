import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-get-pokemon',
    templateUrl: './get-pokemon.component.html',
    styleUrls: ['./get-pokemon.component.css']
})
export class GetPokemonComponent implements OnInit {
    pokemonList:any;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get<any>('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100').subscribe((data) => {
            this.pokemonList = data.results;
            console.log(this.pokemonList);
        });
    }

}
