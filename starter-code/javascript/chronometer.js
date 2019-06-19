class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      printTime();
    }, 10);
  }
  getMinutes() {
    return (this.currentTime > 60) ? this.twoDigitsNumber(Math.floor(this.currentTime / 60)) : this.twoDigitsNumber(0);
  }
  getSeconds() {
    return this.twoDigitsNumber(this.currentTime % 60);
  }
  getMilliseconds() {
    return this.twoDigitsNumber(Math.floor(this.currentTime / 60));
  }
  twoDigitsNumber(time) {
    time > 9 ? time = `${time}` : time = `0${time}`;
    const timeStr = time ? time.toString().split('') : time;
    return timeStr;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.stopClick();
    this.currentTime = 0;
    printTime();
    clearSplits();
  }
  splitClick() {
    const time = `${this.getMinutes().join('')}:${this.getSeconds().join('')}:${this.getMinutes().join('')}`;
    printSplit(time);
  }
}
