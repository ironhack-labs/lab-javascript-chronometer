class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    let intervalId = setInterval(() =>  {
      this.currentTime += 1;
    }, 1000);
  }
  getMinutes() {
    let minutesTime =  Math.floor(this.currentTime / 60);
    return minutesTime;
  }
  getSeconds() {
    let secondsTime = this.currentTime % 60;
    return secondsTime;
  }
  twoDigitsNumber(time) {
    if (time < 10) {
      return `0${time}`;
    } else {
      return `${time}`;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds =  this.twoDigitsNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}