class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  startClick() {
    let chrono = this;
    this.intervalId = setInterval(function() {
      chrono.currentTime++;
    }, 1000);
  }
  getMinutes() {
    if (this.currentTime >= 60) {
      return (this.currentTime = Math.floor(this.currentTime / 60));
    }
    return 0;
  }
  getSeconds() {
    if (this.currentTime >= 60) {
      return (this.currentTime = this.currentTime % 60);
    }
    return this.currentTime;
  }
  twoDigitsNumber(value) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    return (this.currentTime = 0);
  }
}

// splitClick() {}
