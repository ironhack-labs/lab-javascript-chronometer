class Chronometer {
  constructor() {
    this.currentTime= 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      callback();
    }, 10);
    console.log(this.intervalId);
  }
  getMinutes() {
    return Math.floor(this.currentTime /6000);
  }
  getSeconds() {
    return Math.floor(this.currentTime %6000 /100);
  }
  getMilliseconds() {
    return this.currentTime %100;
  }
  twoDigitsNumber(num) {
    if (num < 10) {
      return "0"+num.toString();
    } else {
      return num.toString();
    }
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime=0;
  }
  splitClick() {
    let result =
      this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds()) + ":" + this.twoDigitsNumber(this.getMilliseconds());
    return result; 
  }
}