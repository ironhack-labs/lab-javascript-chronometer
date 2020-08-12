class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      callback();
    }, 1000);
  }
  getMinutes() {
    return parseInt(this.currentTime / 60);
  }
  getSeconds() {
    return Math.floor((this.currentTime / 60 - this.getMinutes()) * 60);
  }
  twoDigitsNumber(number) {
    var s = number + "";
    while (s.length < 2) s = "0" + s;
    return s;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    console.log(this.currentTime);
    this.currentTime = 0;
    console.log(this.currentTime);
  }
  splitClick(number1, number2) {
    return (
      this.twoDigitsNumber(this.getMinutes(number1)) +
      ":" +
      this.twoDigitsNumber(this.getSeconds(number2))
    );
  }
}
