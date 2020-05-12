class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick = function () {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  };

  getMinutes = function () {
    return Math.floor(this.currentTime / 60);
  };

  getSeconds = function () {
    return this.currentTime % 60;
  };

  twoDigitsNumber = function (aNumber) {
    return aNumber <= 9 ? "0" + aNumber.toString() : aNumber.toString();
  };

  stopClick = function () {
    clearInterval(this.intervalId);
  };

  resetClick = function () {
    this.currentTime = 0;
  };

  splitClick = function () {
    debugger;
    let mins = this.twoDigitsNumber(this.getMinutes());
    let secs = this.twoDigitsNumber(this.getSeconds());
    return `${mins}:${secs}`;
  };
}

var chronometerObj = new Chronometer();
