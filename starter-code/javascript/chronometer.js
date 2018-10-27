class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    var _chronometer = this;
    this.intervalId = setInterval(function() {
      _chronometer.currentTime += 1;
      _chronometer.setTime();
    }, 1000);
  }

  setMinutes() {
    return Math.floor(this.currentTime / 60); // feature of the chronometer is tell what the minutes are
  }

  setSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return "" + number;
    }
  }

  setTime() {
    var minutes = this.twoDigitsNumber(this.setMinutes);
    var seconds = this.twoDigitsNumber(this.setSeconds);
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {}

  splitClick() {}
}
