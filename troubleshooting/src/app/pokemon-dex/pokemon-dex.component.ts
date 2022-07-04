import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './Pokemon';
import { Router } from '@angular/router';
import { RequestServiceService } from '../services/request-service.service';


@Component({
    selector: 'app-pokemon-dex',
    templateUrl: './pokemon-dex.component.html',
    styleUrls: ['./pokemon-dex.component.css']
})


export class PokemonDexComponent implements OnInit {
    columnsToDisplay:string[] = ["name", "url"];
    pokemonList:Pokemon[] = [];
    baseUrl: string = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151";

    constructor(private client: RequestServiceService, private router:Router) { }

    ngOnInit(): void {
        this.client.get(this.baseUrl).subscribe(data => {
            this.pokemonList = data.results;
        });
    }

    onSelectPokemon(pokemonName:any){
        this.router.navigate(['/pokemon', pokemonName.name]);
    }

}
