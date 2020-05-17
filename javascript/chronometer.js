class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;

  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++
      callback()
    }, 1000);
  }
  getMinutes() {
    // ... your code goes here
    return Math.trunc(this.currentTime / 60);
  }
  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }
  twoDigitsNumber(number) {
    // ... your code goes here
    // if (min < 10) {
    //   return `${0}${min}:${0}${sec}`;
    // } else {
    //   return `${min}:${sec}`;
    // }
    return number < 10 ? `0${number}` : `${number}`;
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

    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    return `${min}:${sec}`
  }
}