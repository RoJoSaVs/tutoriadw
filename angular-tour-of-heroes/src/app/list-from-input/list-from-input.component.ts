import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-from-input',
  templateUrl: './list-from-input.component.html',
  styleUrls: ['./list-from-input.component.css']
})

export class ListFromInputComponent implements OnInit {
  list:string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addElement(element: string) {
    if (element) {
      this.list.push(element);
    }
  }

}
