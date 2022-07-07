import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatDialogContent } from '@angular/material/dialog';
import { MatDialogActions } from '@angular/material/dialog';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit{

    constructor(public helpDialog: MatDialog) { }

    ngOnInit(): void {
    }

    openHelpDialog(){
        let dialogRef = this.helpDialog.open(DialogContentExampleDialog);
    }

    
}
    
@Component({
    selector: 'dialog-info',
    templateUrl: 'dialog-info.html'
    // template: `<button (click)="closeDialog()">Not Working</button>`
})
export class DialogContentExampleDialog {

    closeDialog(){
        console.log("Close Dialog Function");
    }
}

