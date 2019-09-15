class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
    this.milSecs;
    this.currentMili = 0;
  }

  startClick() {
    this.milSecs = setInterval(() => this.currentMili += 1, 10)
    this.intervalId = setInterval(() => {this.currentTime += 1}, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    return  Math.floor((this.currentTime/60 - Math.floor(this.currentTime / 60)) * 60)
  }
  twoDigitsNumber(value) {
    return value < 10 ? `0` + value : String(value)
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.milSecs);
  }
  resetClick() {
    this.currentTime = 0;
    this.currentMili = 0;
  }
  getMili() {
    if (this.currentMili < 60) {
      return this.currentMili;
    }
    else {
      this.currentMili = 0
      return this.currentMili;
    }
  }
  // splitClick() {
  // }
}