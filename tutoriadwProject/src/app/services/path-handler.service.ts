import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({
    providedIn: 'root'
})
export class PathHandlerService {

    constructor(private route:Router) { }

    navigate(baseUrl:string, subdirectory:string):void{
        this.route.navigate([baseUrl, subdirectory]);
    }

}
