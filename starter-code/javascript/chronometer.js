class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.millisecs = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.millisecs+=1;
      this.currentTime = Math.floor(this.millisecs/100)}, 10);
  }

  getMinutes() {
    var minutes = Math.floor(this.currentTime/60);
    return minutes;
  }

  getSeconds() {
    var seconds = this.currentTime%60;
    return seconds;
  }

  getMilliSeconds()  {
    var ms = this.millisecs;
    return ms;
  }
  twoDigitsNumber(number) {
    if (number < 10) {
      return "0"+ number;
    }
    else {
      return `${number}`;
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
    this.millisecs = 0;
  }
  splitClick() {
    var sec = this.twoDigitsNumber(this.getSeconds());
    var min = this.twoDigitsNumber(this.getMinutes());
    var ms = this.getMilliSeconds();
    let uni = ms%10;
    let dec = Math.floor(ms/10)%10;
    return `${min} : ${sec} : ${uni}${dec}`;
  }
}