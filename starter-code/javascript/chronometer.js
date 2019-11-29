class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
    this.milliseconds = 0;
    this.milliIntervalId;
  }


  // startClick() {}
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime ++;
    }, 1000);

    this.milliIntervalId = setInterval(() => {
      this.milliseconds < 100 ? (this.milliseconds ++) : (this.milliseconds = 0);
    }, 10);
  }


  // getMinutes() {}
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }


  // getSeconds() {}
  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }

  // getMilliseconds {}
  getMilliseconds() {
    let milliseconds = this.milliseconds % 100;
    return milliseconds;
  }


  // twoDigitsNumber() {}
  twoDigitsNumber(a) {

    if (a < 10) {
      var a = '0' + a;
    } else {
      a += '';
      return a;
    }
    return a;
  }


  setUpdateFunction(func) {
    this.printTimeFunction = func;
  }


  setTime() {
    this.minute = this.twoDigitsNumber(this.getMinutes());
    this.second = this.twoDigitsNumber(this.getSeconds());
  }


  // stopClick() {}
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.milliIntervalId);
    this.intervalId = 0;
  }


  // resetClick() {}
  resetClick() {
    this.currentTime = 0;
    this.milliseconds = 0;
  }


  // splitClick() {}
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMilliseconds())}`;
  }

}