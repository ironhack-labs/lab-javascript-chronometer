class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalID = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return Math.round(seconds);
  }

  getMilliseconds() {
    let seconds = this.currentTime - (this.currentTime % 60);
    return milliseconds;
  }

  twoDigitsNumber(i) {
    let digits = i.toString().padStart(2, "0");
    return digits;
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    this.currentTime = this.currentTime;
  }
}
