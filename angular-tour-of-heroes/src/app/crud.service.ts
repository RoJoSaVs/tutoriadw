import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CrudService {

    // url: string = "https://pokeapi.co/api/v2/pokemon/";
    url: string = "http://localhost:5000/api/add";
    response:any;

    constructor(private httpClient: HttpClient) { }

    createElement(url:string, element:any): Observable<any>{
        return this.httpClient.post(url, element);
    }


    readElement(url:string, elementId:string = ""): Observable<any>{
        return this.httpClient.get<any>(url + elementId);
    }

    getSingle(url:string, paramGet:string, paramVal:any): Observable<any>{
        return this.httpClient.get<any>(url + "?" + paramGet + "=" + paramVal);
    }

    updateElement(url:string, paramGet:string, paramVal:any, element:any): Observable<any>{
        return this.httpClient.put(url + "?" + paramGet + "=" + paramVal, element);
    }

    deleteElement(url:string, paramGet:string, paramVal:any): Observable<any>{
        return this.httpClient.delete(url + "?" + paramGet + "=" + paramVal);
    }
}
