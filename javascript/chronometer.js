class Chronometer {
  constructor() {
    this.currentTime = 0; //this is a time in seconds
    this.intervalId = 0;

    this.timeInMiliSeconds = 0; //this is time in milliseconds
    this.intervalMili = 0;
  }

  //incrementing seconds counter every second i.e. 1000 ms
  startClick = function () {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  };

  //incrementing ms counter every 10ms
  startClickMilliSeconds = function () {
    this.intervalMili = setInterval(() => {
      this.timeInMiliSeconds++;
    }, 10);
  };

  getMinutes = function () {
    return Math.floor(this.currentTime / 60);
  };

  getSeconds = function () {
    return this.currentTime;
  };

  //get milliseconds upto 2 decimals as we don't have 4 digits to show on chronometer
  getMilliSeconds = function () {
    return parseInt(this.timeInMiliSeconds.toString().slice(-2));
  };

  twoDigitsNumber = function (aNumber) {
    return aNumber <= 9 ? "0" + aNumber.toString() : aNumber.toString();
  };

  stopClick = function () {
    clearInterval(this.intervalId);
    clearInterval(this.intervalMili);
  };

  resetClick = function () {
    this.currentTime = 0;
    this.timeInMiliSeconds = 0;
  };

  splitClick = function () {
    let mins = this.twoDigitsNumber(this.getMinutes());
    let secs = this.twoDigitsNumber(this.getSeconds());
    let miliSecs = this.twoDigitsNumber(this.getMilliSeconds());
    return `${mins}:${secs}:${miliSecs}`;
  };
}

var chronometerObj = new Chronometer();
