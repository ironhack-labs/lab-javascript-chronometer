class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(() => {
      this.currentTime++;
    }, 1000
    );
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }
  twoDigitsNumber() {
    return "gh";
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.milliIntervalId);
  }
  resetClick() {
    this.currentTime = 0;

  }
  splitClick() {
    return "00:00"
  }
}
