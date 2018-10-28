// Constructor
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

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
    return Math.floor(this.currentTime / 60);
  }

  setSeconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    return this.currentTime % 60;
  }

  twoDigitsNumber(number) {
    if (number.toString().length < 2) {
      return "0" + number.toString();
    } else {
      return number.toString();
    }
  }

  setTime() {
    var minutes = this.setMinutes();
    var seconds = this.setSeconds();
    // console.log(document.getElementById("minDec").innerText);
    // console.log(this.twoDigitsNumber(minutes));
    // console.log(this.twoDigitsNumber(seconds));
    document.getElementById("minDec").innerText = this.twoDigitsNumber(
      minutes
    )[0];
    document.getElementById("minUni").innerText = this.twoDigitsNumber(
      minutes
    )[1];
    document.getElementById("secDec").innerText = this.twoDigitsNumber(
      seconds
    )[0];
    document.getElementById("secUni").innerText = this.twoDigitsNumber(
      seconds
    )[1];
  }

  stopClick(interval) {
    clearInterval(interval);
  }

  resetClick() {
    this.currentTime = 0;
  }
}

// function Chronometer() {

// }

// Chronometer.prototype.startClick = function () {

// };

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
