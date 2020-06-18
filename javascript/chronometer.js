class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    // ... your code goes here
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
    callback();
    // ... your code goes here
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
    // ... your code goes here
  }
  getSeconds() {
    return Math.floor(this.currentTime % 60);
    // ... your code goes here
  }

  getMilliseconds() {
    return Math.floor(this.currentTime % 60);
    // ... your code goes here
  }

  twoDigitsNumber(n) {
    if (String(n).length === 1) return "0" + String(n);
    return String(n);
  }

  stopClick() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(
      this.getSeconds()
    )}`;
  }
}
