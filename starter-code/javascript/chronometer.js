class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.intervalId;
    this.twoDigitsNumber;
    this.stopClick;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }
  getMinutes() {
    this.minutes = Math.floor(this.currentTime / 60);
    return this.minutes;
  }
  getSeconds() {
    this.seconds = this.currentTime % 60;
    return this.seconds;
  }
  twoDigitsNumber(number) {
    let numTwo = number.toString();
    if (numTwo.length > 1) {
      return numTwo;
    }
    return "0" + numTwo;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    
  }


  // splitClick() {}
}
