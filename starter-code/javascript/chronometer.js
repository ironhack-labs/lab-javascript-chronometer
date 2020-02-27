class Chronometer {
  constructor() {
    this.currentTime = 0;
  }
  // startClick() {}
  startClick() {
    let fixedThis = this;
    this.intervalId = setInterval(function() {
      fixedThis.currentTime++;
    }, 1000);
  }
  // getMinutes() {}
  getMinutes() {
    let min = this.currentTime / 60;
    return Math.floor(min);
  }
  // getSeconds() {}
  getSeconds() {
    let secs = this.currentTime % 60;
    return Math.floor(secs);
  }
  // twoDigitsNumber() {}
  twoDigitsNumber(num) {
    let ten = Math.floor(num / 10);
    let unit = Math.floor(num % 10);

    let convertedNum = `${ten}${unit}`;

    return convertedNum;
  }
  // stopClick() {}
  stopClick() {
    return clearInterval(this.intervalId);
  }
  // resetClick() {}
  resetClick() {
    return (this.currentTime = 0);
  }
  // splitClick() {}
  splitClick() {
    let lapTimeMin = this.twoDigitsNumber(this.getMinutes());
    let lapTimeSec = this.twoDigitsNumber(this.getSeconds());

    let splitTime = `${lapTimeMin}:${lapTimeSec}`;
    return splitTime;
  }
}
