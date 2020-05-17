class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.milliseconds = 0;
    this.intervalMilliseconds = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000);
    this.intervalMilliseconds = setInterval(() => {
      if (this.milliseconds === 100) {
        this.milliseconds = 0
      }
      this.milliseconds++
      callback()
    },10);
  }
  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  getMilliseconds() {
    return this.milliseconds
  }
  twoDigitsNumber(number) {
    if (number < 10) {
      return '0' + number;
    } else {
      return number.toString()
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalMilliseconds);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + ':' + this.twoDigitsNumber(this.getSeconds()) + ':' +this.twoDigitsNumber(this.getMilliseconds())
  }
}
