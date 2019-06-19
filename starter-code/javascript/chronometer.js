class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.milSeconds = 0;
    this.intervalMiliSecond = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
    this.intervalMiliSecond = setInterval(() => {
      this.milSeconds += 1;
    }, 10);
  }

  getMiliSeconds() {
    if (this.milSeconds === 0 || this.milSeconds >= 100) {
      this.milSeconds = 0;
      return 0;
    }
    return this.milSeconds
  }

  getMinutes() {
    return Math.floor((this.currentTime / 60))
  }

  getSeconds() {
    return this.currentTime % 60
  }

  twoDigitsNumber(timeInOne) {
    timeInOne = timeInOne.toString();
    if (timeInOne.length === 1) {
      let timeInTwo = `0${timeInOne}`;
      return timeInTwo;
    } else {
      return timeInOne
    };
  }

  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalMiliSecond);
  }

  resetClick() {
    return this.currentTime = 0;
  }

  splitClick() {
    this.currentTime = 0;
    this.milSeconds = 0;
    printTime();
  }
}
