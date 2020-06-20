class Chronometer {
  constructor() {
    this.intervalId = 0;
    this.currentTime = 0;
  }
  startClick(callback) {
    setInterval(() => {
      this.currentTime += 1;
    }, 1000)
  }
  getMinutes() {
    // ... your code goes here
  }
  getSeconds() {
    // ... your code goes here
  }
  twoDigitsNumber() {
    // ... your code goes here
  }
  stopClick() {
    // ... your code goes here
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}