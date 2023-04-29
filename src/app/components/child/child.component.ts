import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
// components/child/child.component.ts

export class ChildComponent implements OnInit, OnChanges, DoCheck {
  @Input() userName = '';

  constructor() {
    console.log("child component constructor called");

  }
  ngDoCheck(): void {
    console.log('ngDoCheck triggered');
  }
  ngOnInit(): void {
    console.log('ngOnInit from the child component');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges triggered', changes);
    if (!changes['userName'].isFirstChange()) {
      if (changes['userName'].currentValue === "Chris") {
        this.userName = 'Hello ' + this.userName
      } else {
        this.userName = changes['userName'].previousValue
      }
    }


  }


}
