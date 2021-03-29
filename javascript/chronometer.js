class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    setInterval(() => {
      this.currentTime++;
    },1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    let minutes = Math.floor(this.currentTime / 60)
    if (minutes === 0) {
      return this.currentTime
    }
    let seconds = Math.floor(((this.currentTime / 60) - minutes) * 60);
    return seconds
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
