class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
    this.status = "stop"

  }
  startClick() {
    this.intervalId = setInterval(() => {
      printTime()
      this.currentTime += 1
    }, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);

  }
  getSeconds() {
    return this.currentTime % 60;

  }
  twoDigitsNumber(num) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num.toString();
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
    printTime()

  }
  splitClick() {

  }
}