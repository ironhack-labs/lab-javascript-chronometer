class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.milliSeconds = 0;
    this.milliIntervalId = 0;
  }

  startClick() {
    var that = this;
    that.intervalId = setInterval(function() {
      that.currentTime += 1;
      that.setTime();
    }, 1000);

    that.milliIntervalId = setInterval(function() {
      if (that.milliSeconds < 100) {
        that.milliSeconds += 1;
      } else {
        that.milliSeconds = 0;
      }
    }, 10);
  }

  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.milliIntervalId);
  }

  resetClick() {
    this.currentTime = 0;
    this.milliSeconds = 0;
  }

  setMinutes() {
    var minutes = 0;
    minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  setSeconds() {
    var seconds = 0;
    seconds = this.currentTime % 60;
    return seconds;
  }

  twoDigitsNumber(n) {
    return ('0' + n).substr(-2);
  }

  // return array of minutes and seconds in two digits format
  setTime() {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());
    return [minutes, seconds];
  }
}
