class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof callback === "function") {
        callback();
      }
    }, 10);
  }
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60);
  }

  getMilliseconds() {
    return this.currentTime % 100;
  }

  twoDigitsNumber(value) {
    // ... your code goes here
    if (value < 10) {
      return "0" + value;
    }
    return "" + value;
  }
  stopClick() {
    // ... your code goes here
    return clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
    return (this.currentTime = 0);
  }
  splitClick() {
    // ... your code goes here
    return (
      this.twoDigitsNumber(this.getMinutes()).toString() +
      ":" +
      this.twoDigitsNumber(this.getSeconds()).toString() +
      ":" +
      this.twoDigitsNumber(this.getMilliseconds())
    );
  }
}
