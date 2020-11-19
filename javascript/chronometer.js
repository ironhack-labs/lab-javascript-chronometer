class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
  /*startClick(callback) {
    // ... your code goes here
    this.intervalID = setInterval(() => {
      this.currentTime ++;
      callback(this.currentTime);
    }, 1000)
  }*/

  startClick(callback) {
    // ... your code goes here
    setInterval(() => {
      this.currentTime += 1;
    }, 1000)}
 
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }
  twoDigitsNumber(number) {
    // ... your code goes here
    return String(number).padStart(2, '0');
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
    return this.twoDigitsNumber(this.getMinutes(this.currentTime)) +":"+ this.twoDigitsNumber(this.getMinutes(this.currentTime));
  }
}
