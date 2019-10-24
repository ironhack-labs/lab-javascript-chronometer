class Chronometer {
  constructor() {
    this.currentTime = 0;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      console.log(this.currentTime);
      printTime();
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    if (this.currentTime === 0) return 0;
    else {
      return this.currentTime % 60;
    }
  }

  twoDigitsNumber(value) {
    if (value < 10) return `0${value}`;
    else return String(value);
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.intervalId = 0;
  }

  splitClick() {
    return this.currentTime;
  }
}
