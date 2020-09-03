export class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    // ... your code goes here
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      callback();
    }, 10);
    // ... your code goes here
  }
  getMinutes() {
    return this.currentTime !== 0 ? Math.floor(this.currentTime / 100 / 60) : 0;
    // ... your code goes here
  }
  getSeconds() {
    return this.currentTime !== 0
      ? Math.floor((this.currentTime / 100) % 60)
      : 0;
    // ... your code goes here
  }

  getMilliSeconds() {
    return this.currentTime !== 0 ? Math.floor(this.currentTime % 100) : 0;
  }

  twoDigitsNumber(twoDigits) {
    return twoDigits >= 10 ? twoDigits.toString() : "0" + twoDigits.toString();
    // ... your code goes here
  }
  stopClick() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }
  resetClick() {
    this.currentTime = 0;
    // ... your code goes here
  }
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    let mil = this.getMilliSeconds();
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(
      sec
    )}:${this.twoDigitsNumber(mil)}`;
    // ... your code goes here
  }
}
