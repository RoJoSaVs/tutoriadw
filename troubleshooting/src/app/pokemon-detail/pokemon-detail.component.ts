import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestServiceService } from '../services/request-service.service';


@Component({
    selector: 'app-pokemon-detail',
    templateUrl: './pokemon-detail.component.html',
    styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
    pokemonName:string = "";
    // baseUrl = "https://pokeapi.co/api/v2/pokemon/ ";
    baseUrl = "https://pokeapi.co/api/v2/pokemon/";
    pokemon:any;

    constructor(private route: ActivatedRoute, private client: RequestServiceService) { }

    ngOnInit(): void {
        this.pokemonName = this.route.snapshot.paramMap.get("pokeName") || '1';
        // this.pokemonName = '1'|| this.route.snapshot.paramMap.get("pokeName");
        this.client.get(this.baseUrl, this.pokemonName).subscribe(data => {
            this.pokemon = data;
        });
    }

}
