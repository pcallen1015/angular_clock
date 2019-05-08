import { Component, OnInit, Input } from '@angular/core';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  Arr = Array;

  public time: string;
  @Input() format: string;

  constructor(private timeService: TimeService) {
    this.updateClock();
  }

  private updateClock(): void {
    this.time = this.timeService.getCurrentTime();
  }

  public calculateRotation(n): number {
    return n * 30;
  }

  ngOnInit(): void {
    setInterval(() => {
      this.updateClock();
    }, 1000);
  }

}
