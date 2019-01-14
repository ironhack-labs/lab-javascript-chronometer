class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  // start counting, output "minutes:seconds"
  startClick() {
    var that = this;
    that.intervalId = setInterval(function() {
      that.currentTime += 1;
      that.setTime();
    }, 1000);
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
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
