import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ServicioService {
    link:string = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100';
    constructor(private http: HttpClient) { }

    get(link:string){
        return this.http.get<any>(link);
    }

    getLocalLink(){
        return this.http.get<any>(this.link);
    }


}
