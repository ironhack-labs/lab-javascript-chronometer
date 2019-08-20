class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(number) {
    let formatedNumber = number.toString();
    if (formatedNumber.length < 2) {
      return `0${formatedNumber}`;
    }
    return formatedNumber;
  }
  stopClick() {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }
  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}
