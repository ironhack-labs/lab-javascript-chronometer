class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.minutes = 0;
    this.seconds = 0;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (this.currentTime == 60) {
        this.getMinutes();
      }
    }, 1000);
  }

  getMinutes() {
    if (this.currentTime != 0) {
      this.minutes = parseInt(this.currentTime / 60);

      return this.minutes;
    } else {
      return 0;
    }
  }
  getSeconds() {
    if (this.currentTime >= 0) {
      if (this.currentTime >= 60) {
        return this.currentTime % 60;
      } else {
        return this.currentTime;
      }
    } else {
      return 0;
    }
  }
  twoDigitsNumber(value) {
    if (value === 0) {
      return "00";
    }
    if (value > 0 && value < 10) {
      return `0${value}`;
    } else {
      return "" + value;
    }
  }

  resetClick() {
    this.currentTime = 0;
  }
  stopClick() {
    clearTimeout(this.intervalId);
  }
  // splitClick() {}
}

const c = new Chronometer();
