class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    }, 1000);
  }
 
  getMinutes() {
    // ... your code goes here

    return Math.floor(this.currentTime / 60);
    // return parseFloat((this.currentTime / 60).toFixed(0))
   

  }
  getSeconds() {
    // ... your code goes here
    return Math.floor((this.currentTime / 60) * 60);
    // return parseFloat((this.currentTime / 60).toFixed(0))*60;
  }
  twoDigitsNumber(number) {
    // ... your code goes here
    // let minutes = this.currentTime.getMinutes();
    // let seconds = this.currentTime.getSeconds();
    if (number < 10) {
      return '0' + number;
    } else {
      return `${number}`;
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
    let minutes = this.getMinutes;
    let seconds = this.getSeconds;
    
    // return `${this.twoDigitsNumber(minutes)}:${this.twoDigitsNumber(seconds)}`
    return this.twoDigitsNumber(minutes) + `:` + this.twoDigitsNumber(seconds);
  }
}
