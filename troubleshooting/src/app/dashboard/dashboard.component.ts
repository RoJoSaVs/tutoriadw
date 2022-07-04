import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    //This data came from chart.js and ng2-charts
    lineChartData: ChartDataSets[] = [{ data: [760, 765, 822, 909, 958, 1060, 998], label: 'Gasoline prices 2022'},];
    lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    lineChartOptions = { responsive: true,};
    lineChartColors: Color[] = [{borderColor: 'black', backgroundColor: 'rgba(0, 177, 56, 0.7)',},];
    lineChartLegend = true;
    lineChartType:ChartType = 'line';
        d:any = false;

    constructor() { }

    ngOnInit(): void { 
        this.d = this.x();
    }

    x():boolean{
        let d:any = new Date();
        let n = 0;
        let list:any= [];
        d = d.getMinutes();
        while(n < 100){
            n-=1;
            if(n == 50){
                list[list.length] = d;
            }
            n+=2;
        }
        if(this.y(list[0])){
            return true;
        }
        else{
            return false;
        }
    }

    y(d:any):boolean{
        if(d % 2 == 0){
            return true;
        }
        else{
            return false;
        }
    }

}
