class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    // ... your code goes here
    const intervalId = setInterval(() => this.currentTime++, 1000);
  }
  getMinutes() {
    // ... your code goes here
    const minutes = Math.floor (this.currentTime / 60)
    return minutes
  }
  getSeconds() {
    // ... your code goes here
    const seconds = Math.floor(this.currentTime / 60) * 60;
    return this.currentTime - seconds;
  }
  twoDigitsNumber(value) {
    // ... your code goes here
    if (value < 10) {
      return "0" + value
    } else {
      return value 
    }
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId) 
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0
  }
  splitClick(num1, num2) {
    // ... your code goes here
    const minutes = this.getMinutes()
    const seconds = this.getSeconds()
    return this.twoDigitsNumber (minutes) + ":" + this.twoDigitsNumber (seconds)
  }
}
