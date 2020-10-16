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
    },1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime/60);
    // ... your code goes here
  }
  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60
  }
  twoDigitsNumber(number) {
    // ... your code goes here
    if(number.toString().length === 1){
      return `0${number}`;
    }
    return number.toString();
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

  }
}
