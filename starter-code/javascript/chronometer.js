class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }


  startClick(printTime) {
    this.intervalId = setInterval(() => {
      printTime()
      this.currentTime += 1;
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(time) {
    // time = this.currentTime;
    let timeString = time.toString();

    if (timeString.length == 1) {
      return '0' + timeString;
    } else {
      return timeString;
    }

  }

  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0;

  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}