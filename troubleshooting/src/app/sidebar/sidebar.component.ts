import { Component, OnInit } from '@angular/core';

import { menuListInstances } from './menuList';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    sideMenu = menuListInstances;
    collapse = false;

    constructor() { }

    ngOnInit(): void {
    }

    toggleSidebar() {
        this.collapse = !this.collapse;
    }

}
