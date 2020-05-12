//jshint esversion: 6

class Chronometer {
  constructor() {}

  currentTime = 0;
  intervalId = 0;

  milCurrenTime = 0;
  milIntervalId = 0;

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
    this.milIntervalId = setInterval(() => {
      this.milCurrenTime +=1;
    }, 10);
  }

  getMinutes() {
    var minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    var seconds = Math.floor(this.currentTime % 60);
    return seconds;
  }

  getMilliseconds() {
    return Number(this.milCurrenTime.toString().slice(-2));
  }


  twoDigitsNumber(num) {
    var outputNum = num.toString();
    if (num < 10) {
      outputNum = "0" + num.toString();
  }
  return outputNum;
}

  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.milIntervalId);
  }

  resetClick() {
    this.currentTime = 0;
    this.milCurrenTime = 0;
  }

  splitClick() {
    var min = this.twoDigitsNumber(this.getMinutes());
    var sec = this.twoDigitsNumber(this.getSeconds());
    var milli = this.twoDigitsNumber(this.getMilliseconds());
    return `${min}:${sec}:${milli}`;
  }
}



