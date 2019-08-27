class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      printTime();
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return +this.currentTime%60
  }

  twoDigitsNumber(number) {

    let numTwo = number.toString();
    
    if (numTwo.length > 1) {
     return numTwo;
    } return "0"+numTwo;
  }
  stopClick() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetClick() {
    clearSplits();
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.currentTime = 0;
    printTime();

  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  }
}