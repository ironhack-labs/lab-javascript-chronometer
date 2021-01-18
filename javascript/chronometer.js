class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1;
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    } else if (this.currentTime < 60) {
      return this.currentTime;
    } else if (this.currentTime >= 60) {
      return this.currentTime - 60 * Math.floor(this.currentTime / 60);
    }
  }
  twoDigitsNumber() {
    const minutes = String(this.getMinutes()).padStart(2, "0");
    const seconds = String(this.getSeconds()).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    return (this.currentTime = 0);
  }
  splitClick() {
    return `${minutes}:${seconds}`;
  }
}
