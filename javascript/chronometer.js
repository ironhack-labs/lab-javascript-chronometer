class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    // ... your code goes here
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
      callback();
      }
    }, 1000)// ... your code goes here
  }
  getMinutes() {
    return Math.floor((this.currentTime) / 60);// ... your code goes here
  }
  getSeconds() {
    let min = this.getMinutes();
    let sec = this.currentTime - (min * 60);
    return sec;
  // ... your code goes here
  }
  twoDigitsNumber(digit) {
    // ... your code goes here
    if (digit < 10) { 
      return "0" + digit;
    }
 
    return digit;
  }

  stopClick() {
    clearInterval(this.intervalId);// ... your code goes here
  }
  resetClick() {
    this.currentTime = 0;// ... your code goes here
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    
    return min + ':' + sec;

    // ... your code goes here
  }
}