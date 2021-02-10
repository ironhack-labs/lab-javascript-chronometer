class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      callback();
    }, 10);
  }
  getMilliseconds() {
    return this.currentTime - this.getMinutes()*6000 - this.getSeconds()*100 ;
  }
  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }
  getSeconds() {
    return Math.floor((this.currentTime - this.getMinutes() * 6000)/100); // => Math.floor(this.currentTime / 60)
  }
  twoDigitsNumber(number) {
    let twoDigit = number < 10 ? "0" + number : String(number);
    return twoDigit;
  }
  stopClick() {
    clearInterval(this.intervalId);
    this.intervalId = 0;
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let result =
      this.twoDigitsNumber(this.getMinutes()) +
      ":" +
      this.twoDigitsNumber(this.getSeconds()) +
      ":" +
      this.twoDigitsNumber(this.getMilliseconds());
    return result;
  }
}
