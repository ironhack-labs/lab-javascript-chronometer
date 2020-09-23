class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.currentMilTime = 0;
    this.intervalMilId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      callback();
    }, 1000);
    this.intervalMilId = setInterval(() => {
      this.currentMilTime++;

      callback();
    }, 10);
  }

  getMinutes() {
    let min = Math.floor(this.currentTime / 60);
    return min;
  }

  getSeconds() {
    let sec = this.currentTime % 60;

    return sec;
  }

  twoDigitsNumber(time) {
    return time.toString().length == 1 ? `0${time}` : time.toString();
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalMilId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick(time) {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    let mil = this.getMil();

    if (min > 10 || sec > 10) {
      return `0${min}:${sec}:${mil}`;
    } else {
      return `0${min}:0${sec}:${mil}`;
    }
  }

  getMil() {
    let milSec = this.currentMilTime;

    if (milSec > 9999) {
      milSec = 0;
    } else if (milSec > 999) {
      return milSec.toString().substr(2, 2);
    } else if (milSec > 99) {
      return milSec.toString().substr(1, 2);
    } else {
      return milSec;
    }
  }
}
