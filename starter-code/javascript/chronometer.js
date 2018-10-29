// Constructor

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.minutes = "";
    this.seconds = "";
  }

  //   startClick() {
  //     this.insertvalID = setInterval(() => {
  //       this.currentTime++;
  //     }, 100);
  //   }

  startClick() {
    this.intervalId = setInterval(
      function() {
        this.currentTime++;
        this.setTime();
      }.bind(this),
      1000
    );
  }

  setMinutes() {
    var minutes = 0;
    if (this.currentTime > 60) {
      minutes = this.currentTime / 60;
    } else {
      return 0;
    }

    return parseInt(minutes);
  }

  setSeconds() {
    var seconds = 0;

    if (this.currentTime < 60) {
      seconds = this.currentTime;
    } else {
      seconds = this.currentTime % 60;
    }

    return seconds;
  }

  twoDigitsNumber(parameter) {
    if (parameter === 0) {
      return "00";
    } else if (parameter > 9) {
      return "" + parameter;
    } else {
      return "0" + parameter;
    }
  }

  setTime() {
    var seconds = this.setSeconds();
    var minutes = this.setMinutes();

    seconds = this.twoDigitsNumber(seconds);

    minutes = this.twoDigitsNumber(minutes);

    this.seconds = "" + seconds;
    this.minutes = "" + minutes;

    printTime(this.minutes, this.seconds);
  }

  stopClick() {
    window.clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
    this.minutes ="00";
    this.seconds ="00";
  }
}

// Chronometer.prototype.setMinutes = function () {

// };

// Chronometer.prototype.setSeconds = function () {

// };

// Chronometer.prototype.twoDigitsNumber = function () {

// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {

// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
