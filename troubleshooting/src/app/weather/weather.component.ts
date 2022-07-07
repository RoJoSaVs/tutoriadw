import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

import { IWeather } from "./IWeather";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})
export class WeatherComponent implements OnInit {
    columnsToDisplay: string[] = ["main", "atributte", "value"];
    weatherSearchForm!: FormGroup;
    isData: Boolean = false;
    weatherData:any;
    // weatherData:any = {"curret":[], "location":[]};
    // weatherData: IWeather = {
    //     request: {
    //         type: "",
    //         query: "",
    //         language: "",
    //         unit: ""
    //     },
    //     location: {
    //         name: "",
    //         country: "",
    //         region: "",
    //         lat: "",
    //         lon: "",
    //         timezone_id: "",
    //         localtime: "",
    //         localtime_epoch: 0,
    //         utc_offset: ""
    //     },
    //     current: {
    //         observation_time: "",
    //         temperature: 0,
    //         weather_code: 0,
    //         weather_icons: [],
    //         weather_descriptions: [],
    //         wind_speed: 0,
    //         wind_degree: 0,
    //         wind_dir: "",
    //         pressure: 0,
    //         precip: 0,
    //         humidity: 0,
    //         cloudcover: 0,
    //         feelslike: 0,
    //         uv_index: 0,
    //         visibility: 0,
    //         is_day: ""
    //     }
    // };
    // ltg:string[] = ["rio", "miami", "paris", "tokyo", "beijing", "rome", "washington"];

    constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

    ngOnInit() {
        this.weatherSearchForm = this.formBuilder.group({location: [""]});
    }


    sendToAPIXU(formValues:any) {
        this.getWeather(formValues.location).subscribe(dataResponse => {
            let data: any = dataResponse;
            this.weatherData.request.type = data.request.type;
            this.weatherData.request.query = data.request.query;
            this.weatherData.request.language = data.request.language;
            this.weatherData.request.unit = data.request.unit;

            this.weatherData.location.name = data.location.name;
            this.weatherData.location.country = data.location.country;
            this.weatherData.location.region = data.location.region;
            this.weatherData.location.lat = data.location.lat;
            this.weatherData.location.lon = data.location.lon;
            this.weatherData.location.timezone_id = data.location.timezone_id;
            this.weatherData.location.localtime = data.location.localtime;
            this.weatherData.location.localtime_epoch = data.location.localtime_epoch;
            this.weatherData.location.utc_offset = data.location.utc_offset;

            this.weatherData.current.observation_time = data.current.observation_time;
            this.weatherData.current.temperature = data.current.temperature;
            this.weatherData.current.weather_code = data.current.weather_code;
            this.weatherData.current.weather_icons = data.current.weather_icons;
            this.weatherData.current.weather_descriptions = data.current.weather_descriptions;
            this.weatherData.current.wind_speed = data.current.wind_speed;
            this.weatherData.current.wind_degree = data.current.wind_degree;
            this.weatherData.current.wind_dir = data.current.wind_dir;
            this.weatherData.current.pressure = data.current.pressure;
            this.weatherData.current.precip = data.current.precip;
            this.weatherData.current.humidity = data.current.humidity;
            this.weatherData.current.cloudcover = data.current.cloudcover;
            this.weatherData.current.feelslike = data.current.feelslike;
            this.weatherData.current.uv_index = data.current.uv_index;
            this.weatherData.current.visibility = data.current.visibility;
            this.weatherData.current.is_day = data.current.is_day;
            this.isData = true;
        });
    }



    // sendToAPIXU(formValues:any) {
    //     formValues.location = this.cont(formValues.location);
    //     this.getWeather(formValues.location).subscribe(dataResponse => {
    //         this.weatherData = dataResponse;
    //     });
        
    // }

    

    //Another function to screw up the app xD
    // cont(l:any){
    //     for(let i:number = 0; i < this.ltg.length; i++){
    //         if(this.ltg[i] == l){
    //             return this.ltg[i];
    //         }
    //     }
    //     return "london";
    // }

    getWeather(location:string){ 
        // let token:string = "2269bbedb135f19ee67394fb205a93cf";//Pass:ApixuService
        // return this.http.get("https://api.apixu.com/v1/current.json?key=2269bbedb135f19ee67394fb205a93cf&q=" + location);
        return this.http.get("http://api.weatherstack.com/current?access_key=2269bbedb135f19ee67394fb205a93cf&query=" + location);
    }

}


// weatherData:any = {
    //     "request": {
    //       "type": "City",
    //       "query": "London, United Kingdom",
    //       "language": "en",
    //       "unit": "m"
    //     },
    //     "location": {
    //       "name": "London",
    //       "country": "United Kingdom",
    //       "region": "City of London, Greater London",
    //       "lat": "51.517",
    //       "lon": "-0.106",
    //       "timezone_id": "Europe\/London",
    //       "localtime": "2022-06-29 06:04",
    //       "localtime_epoch": 1656482640,
    //       "utc_offset": "1.0"
    //     },
    //     "current": {
    //       "observation_time": "05:04 AM",
    //       "temperature": 16,
    //       "weather_code": 299,
    //       "weather_icons": [
    //         "https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0010_heavy_rain_showers.png"
    //       ],
    //       "weather_descriptions": [
    //         "Light Drizzle And Rain, Drizzle"
    //       ],
    //       "wind_speed": 17,
    //       "wind_degree": 180,
    //       "wind_dir": "S",
    //       "pressure": 1012,
    //       "precip": 0,
    //       "humidity": 72,
    //       "cloudcover": 75,
    //       "feelslike": 16,
    //       "uv_index": 3,
    //       "visibility": 7,
    //       "is_day": "yes"
    //     }
    //   }