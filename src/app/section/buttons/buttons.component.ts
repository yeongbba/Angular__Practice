import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {


  @Output() clickEvent = new EventEmitter();

  count = 0;

  constructor() {}

  test($event: MouseEvent) {
    console.log($event);
  }

  start() {
    this.clickEvent.emit("start");
  }

  ngOnInit(): void {
  }

}
