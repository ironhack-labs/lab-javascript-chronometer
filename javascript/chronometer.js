class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(clearInterval) {
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1;
    }, 1000);
  }

  getMinutes() {
    let currentMinute = 0;
    currentMinute = Math.trunc(this.currentTime / 60);
    return currentMinute;
  }

  getSeconds() {
    let currentSecond = 0;
    currentSecond = this.currentTime % 60;
    return currentSecond;
  }

  twoDigitsNumber() {
    let currentSecond = this.getSeconds();
    if (currentSecond < 10) {
     return `0${currentSecond}`;
   } else { 
     return `${currentSecond}`;
   }
  }

  stopClick() {
    clearInterval(this.intervalId);
    return this.intervalID;
  }

  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}
