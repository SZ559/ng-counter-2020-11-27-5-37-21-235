import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number = 10;
  constructor() { }

  ngOnInit(): void {
  }

  increaseCount(): void {
    this.count++;
  }
  decreaseCount(): void {
    this.count--;
  }
  isMinusButtonVisible(): boolean {
    return this.count >= 0;
  }

}
