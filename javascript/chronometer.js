
class Chronometer {

  constructor() {
    this.currentTime= 0;
    this.intervalId= 0;
    // ... your code goes here
  }

   startClick(callback) {
    this.intervalId = setInterval(() => {
    this.currentTime++;
    if (callback) {callback()}
    }, 1000); // every seconds
    // ... your code goes here
  }
  getMinutes() {
    return Math.floor(this.currentTime/60);
    // ... your code goes here
  }
  getSeconds() {
    return (this.currentTime) - (this.getMinutes()*60);
    // ... your code goes here
  }
  twoDigitsNumber() {
    // ... your code goes here
  }
  //export function
  stopClick() {
    return clearInterval();
    // ... your code goes here
  }
  resetClick() {
    this.currentTime = 0;
    // ... your code goes here
  }
  splitClick() {
    if (this.getMinutes() < 10 && this.getSeconds() < 10) {
      return `0${this.getminutes()}:0${this.getSeconds()}`;
    } else if (this.getMinutes() > 10 && this.getSeconds() > 10) {
      return `${this.getMinutes()}:${this.getSeconds()}`;
    // ... your code goes here
  }
}
}
