class Chronometer {
  //Constructor
  constructor() {
    this.currentTime = 0;
    this.intervalId;
    this.milliseconds = 0;
    this.newInterval;
  }

  //Methods
  startClick() {
    let that = this;
    this.intervalId = setInterval(function () {
      that.currentTime += 0.01;
      that.milliseconds++;
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  
  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  getMilliseconds() {
    return this.milliseconds % 100;
  }
  
  twoDigitsNumber(number) {
    number = String(number);
    number = number.padStart(2, '0');
    return number;
  }
  
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.newInterval);
  }

  resetClick() {
    this.currentTime = 0;
    this.milliseconds = 0;
  }

  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds()) + ":" + this.twoDigitsNumber(this.getMilliseconds());
  }
}