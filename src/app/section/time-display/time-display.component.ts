import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css']
})
export class TimeDisplayComponent implements OnInit {

  @Input() inputData: (string | null) = null;
 

  min: number = 0;
  sec: number = 0;
  ms: number = 0;

  timeInterval: any = null;

  constructor() {
    console.log(this.inputData);
  }


  timeStart() {
    this.timeInterval = setInterval(() => {
      this.ms += 1;
    }, 10);
  }

  timeStop() {
    clearInterval(this.timeInterval)
  }

  timeReset() {
    this.timeStop();
    this.ms = 0;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);

    for (let propName in changes) {
      if (propName === "inputData") {
        switch (changes[propName].currentValue) {
          case 'start': 
            this.timeStart();
            break;
          case 'stop':
            this.timeStop();
            break;
          case 'reset':
            this.timeReset();
            break;
        }
      }
    }
  }

  ngOnInit(): void {
  }

}
