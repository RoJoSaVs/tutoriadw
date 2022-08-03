import { Component, OnInit } from '@angular/core';

import { sidebarMenu } from './navMenu';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    sidebar = sidebarMenu;
    collapseMenu = false;

    constructor() { }

    ngOnInit(): void { }

    toggleSidebar(){
        this.collapseMenu = !this.collapseMenu;
    }

}
