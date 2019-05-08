import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  Arr = Array;
  Math = Math;

  public hours: number;
  public minutes: number;
  public seconds: number;
  @Input() format: string;

  constructor() {
    this.updateClock();
  }

  private zeroPad(n: number, l: number): string {
    let s = `${n}`;
    while (s.length < l) {
      s = 0 + s;
    }

    return s;
  }

  private updateClock(): void {
    const now = new Date();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
  }

  public getDigitalReadout(): string {
    return `${this.zeroPad(this.hours, 2)}:${this.zeroPad(this.minutes, 2)}:${this.zeroPad(this.seconds, 2)}`;
  }

  ngOnInit(): void {
    setInterval(() => {
      this.updateClock();
    }, 500);
  }

}
