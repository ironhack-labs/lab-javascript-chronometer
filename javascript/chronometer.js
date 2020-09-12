class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    // ... your code goes here
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      console.log(this.currentTime);
      this.currentTime += 1;
    }, 1000);
    // ... your code goes here
  }
  getMinutes() {
    return Math.floor (this.currentTime / 60)// ... your code goes here
  }
  getSeconds() {
    return (this.currentTime % 60)  // ... your code goes here
  }
  twoDigitsNumber(digit) {
    if (digit < 10) {
      return "0"+digit
    } // ... your code goes here
  }
  stopClick() {
    clearInterval(this.intervalId)// ... your code goes here
  }
  resetClick() {
    return this.currentTime = 0; // ... your code goes here
  }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes())  + ":" + this.twoDigitsNumber(this.getSeconds()) // ... your code goes here
  }
}
