class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.timerStatus =true;
    this.currentMinutes = 0;
    this.currentSeconds = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) callback();
    }, 1000);
  }
  getMinutes() {
    let currentMinutes = this.currentTime /= 60;
    return Math.floor(currentMinutes);
  }
  getSeconds() {
    let currentSeconds = this.currentTime % 60;
    return currentSeconds;
  }

  // twoDigitsNumber(currentMinutes, currentSeconds) {   
  //   return (`${currentMinutes}${currentSeconds}`);

  twoDigitsNumber(value) {
    if (value < 10) return `0${value}`;
    return `${value}`;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  }
}
