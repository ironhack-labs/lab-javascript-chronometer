class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;


    // ... your code goes here
  }
  startClick(callback) {
   this.intervalId = setInterval(() => this.currentTime += 1, 1000)
    // ... your code goes here
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
    // ... your code goes here
  }
  getSeconds() {
    return this.currentTime % 60
    // ... your code goes here
  }
  twoDigitsNumber(number) {
    return (number).toString().padStart(2, 0);
    // ... your code goes here
  }
  stopClick() {
    clearInterval(this.intervalId)
    // ... your code goes here
  }
  resetClick() {
    this.currentTime=0;
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  }
}