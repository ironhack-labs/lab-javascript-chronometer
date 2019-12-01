/*jshint esversion: 6 */
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(
      function() {
        return this.currentTime++;
      }.bind(this),
      1000
    );
  }
  getMinutes() {
    return parseInt(this.currentTime / 60);
    //return 99;
  }
  getSeconds() {
    return parseInt(this.currentTime % 60);
  }
  twoDigitsNumber(num) {
    num = Math.floor(num);
    var formatedNum = ("0" + num).slice(-2);
    return formatedNum;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}
