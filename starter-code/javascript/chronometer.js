class Chronometer {
  constructor() {
    this.currentTime = 0;
  }
  startClick() {
    super.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }
  getMinutes() {
    let seconds = this.currentTime
    let minutes = Math.floor(seconds / 60)
    return minutes;
  }
  getSeconds() {
    let seconds = this.currentTime % 60
    return seconds;
  }
  twoDigitsNumber(number) {
    let stringValue = number < 10 ? ("0" + number) : number.toString();
    return stringValue;
  }


  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}
chronometer = new Chronometer;