// Constructor

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.currentTimeMs = 0;
    this.IntervalIdMs = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      minDec.innerText = Clock.setTime()[0][0];
      minUni.innerText = Clock.setTime()[0][1];
      secDec.innerText = Clock.setTime()[1][0];
      secUni.innerText = Clock.setTime()[1][1];
    }, 1000);
    this.intervalIdMs = setInterval(() => {
      this.currentTimeMs++;
      milDec.innerText = Clock.setTimeMs()[0];
      milUni.innerText = Clock.setTimeMs()[0];
    }, 10);
  }

  setMinutes() {
    return parseInt(this.currentTime / 60);
  }

  setSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(value) {
    if (value < 10) {
      return "0" + value;
    } else return value.toString();
  }

  setTime() {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());
    return [minutes, seconds];
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }

  checkTimeMs(value) {
    if (this.currentTimeMs === 100) this.currentTimeMs = 0;

    if (value < 10) {
      return "0" + value;
    } else return value.toString();
  }

  setTimeMs() {
    return this.checkTimeMs(this.currentTimeMs);
  }
}

