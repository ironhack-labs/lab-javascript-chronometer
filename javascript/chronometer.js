class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(printTime) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000)
  }
  getMinutes() {
    let currentMinutes = Math.floor(this.currentTime / 60);
    // console.log(currentMinutes)
    return currentMinutes;
  }
  getSeconds() {
    let currentSeconds = (this.currentTime % 60);
    return currentSeconds;
  }
  twoDigitsNumber(number) {
    if (number < 10) {
     return ("0" + number)
    } else {
      return number
    }
    
  }
  stopClick() {
    clearInterval(this.intervalId);
    
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}
