class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    // ... your code goes here
    setInterval(() => {
      this.currentTime++;
    }, 1000);
  }
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }
  twoDigitsNumber() {
    // ... your code goes here
    if (number < 10) {
      return `0${number}`;
    }
    return String(number);
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
    const timeStr = This.twoDigitsNumber(
      this.getMinutes() + ':' + this.twoDigitsNumber(this.getSeconds())
    );
    return timeStr;
  }
}
