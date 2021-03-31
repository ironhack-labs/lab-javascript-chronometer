class Chronometer {
  constructor() {
      this.currentTime = 0;
      this.intervalId = 0;
  }
  startClick(callback) {
    let intervalId = setInterval(() => {
      this.currentTime++;
      callback();
      console.log(this.currentTime)
    }, 1000)
  }
  getMinutes() {
    if (this.currentTime === 0) {
      return this.currentTime
    } else {
      return Math.floor(this.currentTime/60)
    }
  }
  getSeconds() {
    if (this.currentTime === 0) {
      return this.currentTime;
    } else {
      return Math.round(this.currentTime % 60);
    }
  }
  twoDigitsNumber(val) {
    let twoDigitsNumber = val;
    if (twoDigitsNumber < 10) {
      twoDigitsNumber = '0' + twoDigitsNumber;
    }
    return twoDigitsNumber.toString();
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
    let firstNum = this.twoDigitsNumber(min);
    let scndNum = this.twoDigitsNumber(sec);
    return `${firstNum}:${scndNum}`;
  }
}
