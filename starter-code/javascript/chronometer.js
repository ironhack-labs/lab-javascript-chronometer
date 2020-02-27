class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000)
  }
  getMinutes() {
    return Math.floor((this.currentTime / 60))
  }
  getSeconds() {
    return Math.floor((this.currentTime % 60))
  }
  twoDigitsNumber(aNumber) {
    if (aNumber < 10) {
      return `0${aNumber}`;
    } else {
      return `${aNumber}`
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${chronometer.twoDigitsNumber(chronometer.getMinutes())[0]}${chronometer.twoDigitsNumber(chronometer.getMinutes())[1]}:${chronometer.twoDigitsNumber(chronometer.getSeconds())[0]}${chronometer.twoDigitsNumber(chronometer.getSeconds())[1]}`
  }
}