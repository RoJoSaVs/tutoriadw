import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// interface SearchResults {
//   total: number;
//   results: Array<object>;
// }

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.css']
})


export class PokemonComponent implements OnInit {
    Pokemons:any;
    ptag:string = "pokemon works!";

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get<any>('https://pokeapi.co/api/v2/pokemon').subscribe(data => {
            this.Pokemons = data.results;
        });
    }

    asd():void{
        this.ptag = "parangaricutirimicuaro";
    }
}
