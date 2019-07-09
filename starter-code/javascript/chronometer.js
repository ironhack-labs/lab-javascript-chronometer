class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }
  getMinutes() {
    if (this.currentTime == 0) {
      return 0;
    } else {
      return Math.floor((this.currentTime * 100) / 60 / 100);
    }
  }
  getSeconds() {
    if (this.currentTime == 0) {
      return 0;
    } else if (this.currentTime < 60) {
      return this.currentTime;
    } else {
      return this.currentTime - 60;
    }
  }

  twoDigitsNumber(value) {
    let valueString = value.toString(10);
    console.log(valueString.length);
    if (valueString.length < 2) {
      return "0" + valueString;
    } else {
      return valueString;
    }
  }
  stopClick() {
    let intervalDown = clearInterval(this.intervalId);
  }
  resetClick() {
    let resetTime = clearInterval(this.currentTime);
  }
  // splitClick() {}
}
