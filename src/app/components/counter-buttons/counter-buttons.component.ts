import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent {
  @Input() buttonclass: string = "btn btn-success";
  @Input() buttontext: string = "Click Me"
  @Input() buttontype: string = "button";
  @Output() buttonFunction = new EventEmitter<void>();

  onEmit() {
    this.buttonFunction.emit()
  }
}
