class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    const intervalId = setInterval(() => {
      this.currentTime++;
      if (this.currentTime > 60) {
        clearInterval(intervalId)
      }
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  twoDigitsNumber() {
    return ('0' + this.thiscurrentTime).slice(-2);
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    const min = this.getMinutes();
    const sec = this.getSeconds();
    if (min < 10 && sec < 10) {
      return `${0}${min}:${0}${sec}`;
    } else if (min < 10 && sec > 10) {
      return `0${min}:${sec}`;
    } else if (min > 10 && sec < 10) {
      return `${min}:0${sec}`;
    } else {
      return `${min}:${sec}`;
    }
  }
}