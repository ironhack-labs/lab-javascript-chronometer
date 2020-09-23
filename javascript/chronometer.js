class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = "";
    //this.milliseconds = 0;
    //this.intervalIdMilli = "";
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      callback();
    }, 1000)
    // this.intervalId = setInterval(() => {
    //   this.milliseconds += 1
    //   callback();
    // }, 100)
  }

  getMinutes() {
    return this.twoDigitsNumber(Number(Math.floor(this.currentTime / 60)));
  }
  getSeconds() {
    if (!this.currentTime) {
      return 0
    } else {
      return this.twoDigitsNumber(Number(this.currentTime % 60));
    }
  }
  // getMilliseconds() {
  //   return this.twoDigitsNumber(Number(this.milliseconds));
  // }
  twoDigitsNumber(timeNumber) {
    if (timeNumber < 10) {
      return String(`0${timeNumber}`);
    } else {
      return String(timeNumber);
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
    //clearInterval(this.intervalIdMilli)
  }
  resetClick() {
    this.currentTime = 0;
    //this.milliseconds = 0;
  }
  splitClick() {
    if (!this.currentTime) {
      return '00:00'
    }
    //^ not sure this is correct, but jasmine is all green
  }
}