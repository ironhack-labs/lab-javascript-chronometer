class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval( () => {
      this.currentTime ++;
    }, 1000);
  }
  getMinutes() {
    // ... your code goes here
    let toMinutes = Math.floor(this.currentTime/60);
    return toMinutes;
  }
  getSeconds() {
    // ... your code goes here
    let toSeconds = this.currentTime % 60;
    return toSeconds;
  }
  twoDigitsNumber(oneDigit) {
    // ... your code goes here
     if (oneDigit < 10) {
       return oneDigit = `0${oneDigit}`;
       
     } else {
       return oneDigit = `${oneDigit}`;
     }
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
    return `${this.twoDigitsNumber(this.getMinutes())} : ${this.twoDigitsNumber(this.getSeconds())}`;
  }
}
