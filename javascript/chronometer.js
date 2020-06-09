class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    // ... your code goes here
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() =>  this.currentTime++, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60)
    // ... your code goes here
  }
  getSeconds() {
    return Math.floor(this.currentTime % 60)
    // ... your code goes here
  }
  twoDigitsNumber(value) {
    return (this.getMinutes()).toString() + (this.getSeconds()).toString();
    // ... your code goes here
  }
  stopClick() {
    clearInterval(this.intervalId)
    // ... your code goes here
  }
  resetClick() {
     this.currentTime = 0;
    // ... your code goes here
  }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes) + `:` + this.twoDigitsNumber(this.getSeconds); ;
    // ... your code goes here
  }
}
