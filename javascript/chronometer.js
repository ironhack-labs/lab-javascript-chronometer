class Chronometer {
  constructor(){
  this.currentTime = 0;
  this.intervalId = 0;
  }

  startClick(callback) {
   const callbackFn = () => {
     this.currentTime += 1
   }
   this.intervalId = setInterval(callbackFn, 1000);
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
