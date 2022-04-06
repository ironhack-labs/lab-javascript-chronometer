class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.millisecondsIntervalId = 0;
    this.currentMiliSecond = 0;
  }

  startClick(printTime) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTime) printTime();
    }, 1000);
    this.millisecondsIntervalId = setInterval(() => {
      this.currentMiliSecond++;
    }, 1);
  }

  getMinutes() {
    let currentTimeMin = Math.floor(this.currentTime / 60);
    return currentTimeMin;
  }

  getMiliSeconds() {
    let xMiliSecond = Math.floor(this.currentMiliSecond);
    return xMiliSecond;
  }

  getSeconds() {
    let currentTimeSec = this.currentTime % 60;
    return currentTimeSec;
  }

  twoDigitsNumber(num) {
    return ('0' + num).slice(-2);
  }

  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecondsIntervalId);
  }

  resetClick() {
    this.currentTime = 0;
    this.currentMiliSecond = 0;
    minDecElement.innerHTML = 0;
    minUniElement.innerHTML = 0;
    secDecElement.innerHTML = 0;
    secUniElement.innerHTML = 0;
    milUniElement.innerHTML = 0;
    milDecElement.innerHTML = 0;
  }

  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    let miliSeconds = this.twoDigitsNumber(this.getMiliSeconds());

    return `${minutes}:${seconds}:${miliSeconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
