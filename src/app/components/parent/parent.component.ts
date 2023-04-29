import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
// components/parent/parent.component.ts

export class ParentComponent {
  userName = 'Maria';
  constructor() {
    console.log("parent component constructor called");

  }
  updateUser() {
    this.userName = 'Chris';
  }

  ngOnInit() {
    console.log('ngOnInit from the parent component');
  }
}
