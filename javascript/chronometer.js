class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.milliseconds = 1;
    this.milIntervalId = 0;
  }
  // startClick(callback) // Not specify callback here, because I want it to receive two function that can be involked inside
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      arguments[0]();
    }, 1000);
    this.milIntervalId = setInterval(() => {
      this.milliseconds < 99 ? this.milliseconds++ : this.milliseconds = 1;
      arguments[1]();
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }

  getMiliseconds() {
    return this.milliseconds;
  }

  twoDigitsNumber(number) {
    return number < 10 ? '0' + number : number.toString();
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.milIntervalId);
  }
  resetClick() {
    this.currentTime = 0;
    this.milliseconds = 0
  }
  splitClick() {
    let sec = this.getSeconds();
    let min = this.getMinutes();
    let mil = this.getMiliseconds();
    return this.twoDigitsNumber(min) + ':' + this.twoDigitsNumber(sec) + ':' + this.twoDigitsNumber(mil);
  }
}
