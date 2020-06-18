class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    //console.log(callback);

    setInterval(() => {
      this.currentTime++;

      printMinutes();
      printSeconds();
      console.log(this.currentTime);
    }, 1000);
  }
  getMinutes() {
    let minutes = 0;
    if (this.currentTime === 0) return 0;
    if (this.currentTime > 60) {
      minutes = (this.currentTime - (this.currentTime % 60)) / 60;
    }
    minutes = Math.round(minutes);
    return minutes;
  }
  getSeconds() {
    let seconds = 0;
    if (this.currentTime < 60) return this.currentTime;
    if (this.currentTime > 60) {
      seconds = this.currentTime % 60;
    }

    return seconds;
  }
  twoDigitsNumber(arg) {
    if (arg < 10) {
      arg = "0" + arg;
    }
    if (arg >= 10) {
      arg = String(arg);
    }

    return arg;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    if (min < 10 || sec < 10) {
      return `${0}${min}:${0}${sec}`;
    } else {
      return `${min}:${sec}`;
    }
  }
}
