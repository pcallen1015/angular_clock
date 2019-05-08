import { Injectable } from '@angular/core';

@Injectable()
export class TimeService {

  constructor() { }

  private zeroPad(n: number, l: number): string {
    let s = `${n}`;
    while (s.length < l) {
      s = 0 + s;
    }

    return s;
  }

  public getCurrentTime(): string {
    const now = new Date();
    return `${this.zeroPad(now.getHours(), 2)}:${this.zeroPad(now.getMinutes(), 2)}:${this.zeroPad(now.getSeconds(), 2)}`;
  }

}
