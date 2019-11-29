class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  startClick() {
    this.intervalId = setInterval(increaseOneSecond, 1000);
    function increaseOneSecond() {
      return this.currentTime++;
    }
  }
  getMinutes() {
    return parseInt(this.currentTime / 60, 10);
  }
  getSeconds() {
    return parseInt(this.currentTime % 60, 10);
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
