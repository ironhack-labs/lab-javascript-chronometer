class Chronometer {
  constructor() {
    // ... your code goes here
   this.currentTime = 0;
    this.intervalId= 0;
  }
  startClick(calback) {
   this.intervalId = setInterval(()=>{
      this.currentTime++
    },1000);
    // ... your code goes here
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
    // ... your code goes here
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}
