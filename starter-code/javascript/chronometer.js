class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.currentMilliseconds = 0;
    this.intervalId = null;
    this.millisecondsIntervalId = null;
    this.splits = [];
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);

    this.millisecondsIntervalId = setInterval(() => {
      this.currentMilliseconds += 10;
    }, 10);
  }
  getMinutes() {
    return parseInt(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  getMilliseconds() {
    return (this.currentMilliseconds / 10) % 1000;
  }
  twoDigitsNumber(number) {
    return `0${number}`.slice(-2);
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecondsIntervalId);
    this.intervalId = null;
  }
  resetClick() {
    this.currentTime = 0;
    this.currentMilliseconds = 0;
    this.splits = [];
  }
  splitClick() {
    this.splits.push({
      currentTime: this.currentTime,
      minutes: this.getMinutes(),
      seconds: this.getSeconds(),
      milliseconds: this.getMilliseconds()
    });
  }
}
