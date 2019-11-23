class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(function () 
      {chronometer.currentTime += 1}, 10);
  }
  getMinutes() {
    return this.twoDigitsNumber(Math.floor(this.currentTime / 6000));
  }
  getSeconds() {
    return this.twoDigitsNumber(Math.floor((this.currentTime % 6000) / 100));
  }
  getMilliseconds() { //correction: hundredths of second
    return this.twoDigitsNumber(this.currentTime % 100);
  }
  twoDigitsNumber(num) {
    let str = "00" + num;
    return str.slice(str.length - 2);
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {}
}


