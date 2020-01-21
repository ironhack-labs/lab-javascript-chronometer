class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    let minutes = parseInt(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = parseInt(this.currentTime % 60);
    return seconds;
  }

  twoDigitsNumber(number) {
    if (number === 0) {
      return `00`;
    } else if (number < 10) {
      return `0${number}`;
    } else {
      return `${number}`;
    }
  }

  stopClick() {
    clearInterval()
  }

  resetClick() {
    this.currentTime = 0
  }

  splitClick() {}
}
