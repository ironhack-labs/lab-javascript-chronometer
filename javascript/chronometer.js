class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0
  }
  startClick(callback) {
    // ... your code goes here
     setInterval(() => {
       this.currentTime += 1}, 1000)
  }
  getMinutes() {
    // ... your code goes here
    let currentMin = Math.floor(this.currentTime / 60)
    return currentMin
  }
  getSeconds() {
    // ... your code goes here
    let currentSec = Math.floor(this.currentTime % 60)
    return currentSec
  }
  twoDigitsNumber(num) {
    // ... your code goes here
    if (num.toString().length === 1) {
      return '0' + num
    } else {
      return num
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
  splitClick() {
    // ... your code goes here
    return `${this.getMinutes(min)}:${this.getSeconds(sec)}`;
  }
}
