class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    const intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    return Math.trunc(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(num) {
    if (this.currentTime > 9) {
      return num;
    } else {
      return "0" + num;
    }
  }

  stopClick() {
    const intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
    clearInterval(intervalId);
  }

  resetClick() {
    this.currentTime = 0;
    return this.currentTime;
  }

  splitClick() {
    if (min < 10 && sec < 10) {
      return `${0}${min}:${0}${sec}`;
    } else if (min < 10 && sec > 10) {
      return `0${min}:${sec}`;
    } else if (min > 10 && sec < 10) {
      return `${min}:0${sec}`;
    } else {
      return `${min}:${sec}`;
    }
  }
}
