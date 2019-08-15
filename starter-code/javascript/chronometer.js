class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => (this.currentTime += 1), 1000);
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);
    return minutes  % 60;
  }

  getSeconds() {
    //this.currentTime = 50;
    return this.currentTime % 60;
  }

  twoDigitsNumber(number) {
    let stringNumber = String(number);
    if(stringNumber.length === 1) {
      return `0${stringNumber}`
    } else return stringNumber;
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

//   splitClick() {}
}
