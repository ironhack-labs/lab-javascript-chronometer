class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(printTime) {
    this.intervalId = setInterval( () => {
      this.currentTime++;
      if (printTime) printTime();
    }, 1000);
  }

  getMinutes() {
    let currentTimeMin = Math.floor(this.currentTime / 60);
    console.log(currentTimeMin);
    return currentTimeMin;
  }

  getSeconds() {
    let currentTimeSec = this.currentTime % 60;
    console.log(currentTimeSec);
    return currentTimeSec;
  }

  twoDigitsNumber(num) {
    return ("0" + num).slice(-2);
  }

  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecondsIntervalId);
  }

  resetClick() {
    this.currentTime = 0;
    minUni.innerHTML = `00`;
    secUni.innerHTML = `00`;
  }

  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());

    return `${minutes}:${seconds}`;
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}


