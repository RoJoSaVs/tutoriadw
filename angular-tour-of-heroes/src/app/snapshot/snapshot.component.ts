import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-snapshot',
    templateUrl: './snapshot.component.html',
    styleUrls: ['./snapshot.component.css']
})
export class SnapshotComponent implements OnInit {

    teacher:{ sn:string; lecturer: string} = {sn: "", lecturer: ""};

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.teacher = {
            sn: this.route.snapshot.params['sn'],
            lecturer: this.route.snapshot.params['lecturer']
        }
    }
}
