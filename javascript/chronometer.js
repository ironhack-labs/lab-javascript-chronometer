class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      callback();
    }, 1000);
  }

  getMinutes() {
    let minutes = 0;
    minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }
  getSeconds() {
    let seconds = 0;
    seconds = this.currentTime % 60;
    return seconds;
  }
  twoDigitsNumber(num) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return `${num}`;
    }
  }
  stopClick() {
    return clearInterval(this.intervalId);
  }
  resetClick() {
    return (this.currentTime = 0);
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    return `${min}:${sec}`;
  }
}
