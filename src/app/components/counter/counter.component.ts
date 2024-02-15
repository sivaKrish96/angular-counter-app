import { Component } from '@angular/core';
import { ButtonModule } from 'src/modules/button.module';
import { Counter } from 'src/modules/counter.modules';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  buttonPrimary: ButtonModule = {
    buttontext: "Increment",
    buttontype: "button",
    buttonclass: "btn btn-success",
    buttonFunction: this.onIncrement
  }

  buttonSecondary: ButtonModule = {
    buttontext: "Decrement",
    buttontype: "button",
    buttonclass: "btn btn-info",
    buttonFunction: this.onDecrement
  }

  buttonReset: ButtonModule = {
    buttontext: "Reset",
    buttontype: "button",
    buttonclass: "btn btn-danger",
    buttonFunction: this.onReset
  }

  counter: Counter = {
    count: 0
  }

  onIncrement(): void {
    this.counter.count += 1
  }

  onDecrement(): void {
    this.counter.count -= 1
  }

  onReset(): void {
    this.counter.count = 0
  }
}
