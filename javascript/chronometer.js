class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    setInterval((ArrowFunction) => (this.currentTime += 1), 1000);

    return callback;
  }

  getMinutes() {
    return (this.currentTime = Math.floor(this.currentTime / 60));
  }

  getSeconds() {
    return this.currentTime - this.getMinutes() * 60;
  }

  twoDigitsNumber(value) {
    value = String(value);
    return value.padStart(2, "0");
  }

  stopClick() {
    return clearInterval(this.intervalId);
  }

  resetClick() {
    return (this.currentTime = 0);
  }

  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();

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
