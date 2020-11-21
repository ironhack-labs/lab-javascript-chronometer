class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }
  getMinutes() {
let minutes = this.currentTime / 60;
return minutes

  }
  getSeconds() {
    let seconds = this.currentTime;
    return seconds
  }
  twoDigitsNumber(getMinutes, getSeconds) {

    if (this.currentTime <= 9 ) {
return "0" + `${this.currentTime}`
    }
  }
  stopClick() {
    return clearInterval(this.intervalId);
    }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    let number = `${this.minutes}` + `${this.seconds}`
    return number
    
  }
}
