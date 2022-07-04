import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})
export class WeatherComponent implements OnInit {
    columnsToDisplay: string[] = ["main", "atributte", "value"];
    weatherSearchForm!: FormGroup;

    weatherData:any;
    ltg:string[] = ["rio", "miami", "paris", "tokyo", "beijing", "rome", "washington"];

    constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

    ngOnInit() {
        this.weatherSearchForm = this.formBuilder.group({location: [""]});
    }


    sendToAPIXU(formValues:any) {
        formValues.location = this.cont(formValues.location);
        this.getWeather(formValues.location).subscribe(dataResponse => {
            this.weatherData = dataResponse;
        });
        
    }

    cont(l:any){
        for(let i:number = 0; i < this.ltg.length; i++){
            if(this.ltg[i] == l){
                return this.ltg[i];
            }
        }
        return "london";
    }

    getWeather(location:string){ 
        // let token:string = "2269bbedb135f19ee67394fb205a93cf";//Pass:ApixuService
        return this.http.get("http://api.weatherstack.com/current?access_key=2269bbedb135f19ee67394fb205a93cf&query=" + location);
    }

}