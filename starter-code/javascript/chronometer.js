class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.setTime();
      this.currentTime++;
    }, 1000)
  }

  setMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  setSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(a) {
    if (a < 10) {
      return '0' + a;
    } else {
      return a.toString();
    }
  }

  setTime() {
    if (this.setMinutes() < 10) {
      return '0' + this.setMinutes();
    } else {
      return this.setMinutes();
    }
  }

  setMilliseconds() {

  }

  stopClick() {
    this.intervalId = clearInterval();
  }

  resetClick() {

  }

  splitClick() {

  }
}