class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.centiseconds = 0;
    this.intervalId2 = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    }, 1000);
    this.intervalId2 = setInterval(() => {
      this.centiseconds++;
      if (callback) {
        callback();
      }
    }, 10);
  }
  getMinutes() {
    let minutes = parseInt(this.currentTime / 60);
    return minutes;
  }
  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }
  getMilliSeconds(){
    let milliseconds = this.centiseconds;
    return milliseconds;
  }
  twoDigitsNumber(num) {
    return ("0" + num).slice(-2);
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalId2);
  }
  resetClick() {
    this.currentTime = 0;
    this.centiseconds = 0;
  }
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    let millisec = this.getMilliSeconds();
    let timeNow;
    if (min < 10) {
      timeNow = `${0}${min}:${0}${sec}:${0}${millisec}`;
    } else {
      timeNow = `${min}:${sec}:${millisec}`;
    }
    return timeNow;
  }
}
