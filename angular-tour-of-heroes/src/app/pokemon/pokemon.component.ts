import { Component, OnInit } from '@angular/core';
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
    
    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get<any>('https://pokeapi.co/api/v2/pokemon').subscribe(data => {
            this.Pokemons = data.results;
        });
    }
}
