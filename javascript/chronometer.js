class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(() => { console.log(++this.currentTime) }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    
  }
  getSeconds() {
    // ... your code goes here
  }
  twoDigitsNumber() {
    // ... your code goes here
  }
  stopClick() {
    clearInterval(this.currentTime)
  }
  resetClick() {
    // ... your code goes here
    clearInterval(this.currentTime)
    this.currentTime = 0
  }
  splitClick() {
    // ... your code goes here
    
  }
}
