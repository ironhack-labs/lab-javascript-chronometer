class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  getMinutes() {
    let currentMins = Math.floor(this.currentTime / 60);
    return currentMins >= 10 ? currentMins : `0${currentMins}`;
  }
  getSeconds() {
    let currentSecs = this.currentTime % 60;
    return currentSecs >= 10 ? currentSecs : `0${currentSecs}`;
  }