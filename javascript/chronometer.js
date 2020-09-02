export class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    // ... your code goes here
  }
  startClick(callback) {
    setInterval(() => {
      this.currentTime += 1
    }, 1000);
    // ... your code goes here
  }
  getMinutes() {
    return this.currentTime !== 0 ? Math.floor(this.currentTime/60) : 0;
    // ... your code goes here
  }
  getSeconds() {
    return this.currentTime !== 0 ? Math.floor(this.currentTime%60) : 0;
    // ... your code goes here
  }
  twoDigitsNumber(twoDigits) {
    return  twoDigits >= 10 ?  twoDigits.toString() : "0" + twoDigits.toString();
    // ... your code goes here
  }
  stopClick() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }
  resetClick() {
    this.currentTime = 0 ;
    // ... your code goes here
  }
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    if (min < 10) {
    return(`${0}${min}:${0}${sec}`)
    } else {
      return(`${min}:${sec}`);
    // ... your code goes here
  }
}
}
