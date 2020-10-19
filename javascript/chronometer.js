class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(
      () => this.currentTime++, 1000)
  }
  getMinutes() {
    let minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }
  getSeconds() {
    return this.currentTime % 60;

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

chronometer = new Chronometer();
chronometer.currentTime = 115;
console.log(chronometer.getSeconds())
