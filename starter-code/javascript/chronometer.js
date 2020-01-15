class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.isRunning = false;
  }

  startClick(callback) {
    this.isRunning = true;
    this.intervalId = setInterval(() => {
      this.currentTime += 1 ;
      console.log(this.currentTime);
      callback();
      }, 1000);
    }

  getMinutes() {
    let minutes = Math.trunc(this.currentTime / 60);
    return this.twoDigitsNumber(minutes);
  }

  getSeconds() {
    let seconds = this.currentTime % 60 ;
    return this.twoDigitsNumber(seconds);
  }

  twoDigitsNumber(value) {
    if (value.toString().length < 2) {
      return `0${value}`;
    } else return `${value}`;
  }

  stopClick() {
    this.isRunning = false;
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  getRunningState() {
    return this.isRunning;
  }

  splitClick() {
    let splitMin = this.getMinutes();
    let splitSec = this.getSeconds();
    return `${splitMin}:${splitSec}`;
  }
}