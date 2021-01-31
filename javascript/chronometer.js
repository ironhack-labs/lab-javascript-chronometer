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
      callback();
    }, 10);
    console.log(this.currentTime);
  }
  // getHours() {
  //     return Math.floor(this.currentTime / 360000);
  // }
  getMinutes() {
    // ... your code goes here
    return Math.floor((this.currentTime / 6000) % 60);
  }
  getSeconds() {
    // ... your code goes here
    return Math.floor((this.currentTime / 100) % 60);
  }
  getMilliseconds() {
    return this.currentTime % 100;
  }
  twoDigitsNumber(num) {
    // ... your code goes here
    return String(num).padStart(2, "0");
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
    // let hour = this.twoDigitsNumber(this.getHours());
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    let milliSec = this.twoDigitsNumber(this.getMilliseconds());
    let string = `${min}:${sec}:${milliSec}`;
    return string;
  }
}
