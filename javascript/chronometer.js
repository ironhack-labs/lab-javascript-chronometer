class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(() => {
      this.currentTime++;
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(receivedTimeValue) {
    return receivedTimeValue.toString().padStart(2, "0");
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let mins = this.twoDigitsNumber(this.getMinutes());
    let secs = this.twoDigitsNumber(this.getSeconds());

    return `${mins}:${secs}`;
  }
}
