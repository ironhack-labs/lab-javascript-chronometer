"use strict";

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;

    this.currentTimeMilliSeconds = 0;
    this.intervalIdMilliSeconds = 0;
  }

  startClick(callBack) {
    const incTime = () => {
      this.currentTime += 1;
      if (callBack) callBack();
      // console.log(this.currentTime);
    };
    this.intervalId = setInterval(incTime, 1000);
  }

  startClickMilliSeconds(callBack) {
    const incTimeMilliSecods = () => {
      this.currentTimeMilliSeconds += 1;
      if (callBack) callBack();
      // console.log(this.currentTimeMilliSeconds);
    };
    this.intervalIdMilliSeconds = setInterval(incTimeMilliSecods, 10);
  }

  getMinutes() {
    return Number(Math.floor(this.currentTime / 60));
  }

  getSeconds() {
    return Number(Math.floor(this.currentTime % 60));
  }

  twoDigitsNumber(num) {
    return `0${num}`.slice(-2);
  }

  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalIdMilliSeconds);
  }

  resetClick() {
    this.currentTime = 0;
    this.currentTimeMilliSeconds = 0;
  }

  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(
      this.getSeconds()
    )}`;
  }
}
