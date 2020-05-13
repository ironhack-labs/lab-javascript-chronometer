class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    // ... your code goes here
   this.intervalId = setInterval(()=>{
      this.currentTime++;
    }, 1000)

  }
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60)
    
  }
  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60);
  }
  twoDigitsNumber(val) {
    // ... your code goes here
    return ("0" + val).slice(-2)
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}
