import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CrudService {

    url:string = "https://pokeapi.co/api/v2/pokemon/";
    response:any;

    constructor(private httpClient: HttpClient) { }

    createElement(element:any){
        this.httpClient.post(this.url, element);
    }


    readElement(elementId:string): Observable<any>{
        return this.httpClient.get<any>(this.url + elementId);
    }

    updateElement(elementId:any, element:any){
        this.httpClient.put(this.url + elementId, element);
    }

    deleteElement(elementId:any){
        this.httpClient.delete(this.url + elementId);
    }
}
