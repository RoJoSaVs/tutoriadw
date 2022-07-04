import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class RequestServiceService {

    constructor(private http: HttpClient) { }


    get(baseUrl:string, parameter:string = ""):Observable<any>{
        return this.http.get<any>(baseUrl + parameter);
    }


}
