import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number = 10;
  backgroundColor: string = 'white';
  constructor() { }

  ngOnInit(): void {
  }

  increaseCount(): void {
    this.count++;
    this.changeBackgroundColor();
  }
  decreaseCount(): void {
    this.count--;
    this.changeBackgroundColor();
  }
  isMinusButtonVisible(): boolean {
    return this.count >= 0;
  }
  isPlusButtonVisible(): boolean {
    return this.count <= 10;
  }
  changeBackgroundColor(): void {
    if (this.count < 0)
    {
      this.backgroundColor = 'green';
    }
    else if (this.count > 10)
    {
      this.backgroundColor = 'red';
    }
    else
    {
      this.backgroundColor = 'white';
    }
  }
  resetToZero(): void
  {
    this.count = 0;
    this.changeBackgroundColor();
  }
}
