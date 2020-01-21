class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      printTime();
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    let minutes = parseInt(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = parseInt(this.currentTime%60);
    return seconds;
  }

  twoDigitsNumber(value) {
    if (value === 0){
      return `00`
    } else if (value < 10){
      return `0${value}`
    } else {
      return `${value}`
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    return this.currentTime = 0;
  }

  splitClick() {

  }
}
