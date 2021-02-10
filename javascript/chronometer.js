class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(
      () => this.currentTime++, 1000);
  }
  getMinutes() {
    let minutes = this.currentTime / 60
    return minutes = (5*60*1000) % 6;
  }
  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60
  }
  twoDigitsNumber() {
    // ... your code goes here
    return("0"+number).tofixed(2);
  }
  stopClick() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }
  resetClick() {
    this.currentTime=0;
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}
