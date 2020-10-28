class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
 startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    }, 10);
  }
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/6000);
  }
  getSeconds() {
    // ... your code goes here
    return (Math.floor(this.currentTime/100))%60;
  }

  getMilliseconds() {
    // ... your code goes here
    return this.currentTime%100;
  }

  twoDigitsNumber(timeValue) {
    // ... your code goes here
    return timeValue.toString().padStart(2,'0');
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
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMilliseconds())}`;
  }
}
