class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(
      function() {
        this.currentTime++;
      }.bind(this),
      1000
    );
  }
  getMinutes() {
    this.minutes = Math.floor(this.currentTime / 60);
    return this.minutes;
  }
  getSeconds() {
    this.minutesRemoved = 0;
    if (this.currentTime % 60 != 0)
      //{
      this.minutesRemoved = this.currentTime % 60;
    return this.minutesRemoved;
  }
  twoDigitsNumber(number) {
    this.numToStr = number.toString();
    if (this.numToStr.length < 2) {
      this.twoDigits = "0" + this.numToStr;
    } else {
      this.twoDigits = this.numToStr;
    }
    return this.twoDigits;
  }
  // stopClick() {}
  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}
