class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    var intervalId = setInterval(() => (this.currentTime += 1), 1000);
  }
  getMinutes() {
    var minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }
  getSeconds() {
    var minutes = Math.floor(this.currentTime / 60);
    var remainingSeconds = this.currentTime - minutes * 60;
    return remainingSeconds;
  }
  twoDigitsNumber() {
    if (this.currentTime < 10) {
      return "0" + this.currentTime;
    }
    return this.currentTime;
  }

  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    var min = this.getMinutes();
    var sec = this.getSeconds();

    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }

    return `${min}:${sec}`;
  }
}