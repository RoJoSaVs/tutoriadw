import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-department-detail',
    templateUrl: './department-detail.component.html',
    styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

    departmentId:number = 0;

    constructor(private route: ActivatedRoute ) { }

    ngOnInit(): void {
        let id:any = this.route.snapshot.paramMap.get("id");
        try {
            this.departmentId = parseInt(id);
        } catch (error) {
            
        }
    }

}
