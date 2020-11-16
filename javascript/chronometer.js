class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.currentMilliSeconds = 0;
    this.intervalIdMilliSeconds = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      callback()
    }, 1000);
    
    this.intervalIdMilliSeconds = setInterval(() => {
      this.currentMilliSeconds++
      callback()
    })  
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }

  getMilliSeconds() {
    if (this.currentMilliSeconds > 99) {
      this.currentMilliSeconds = 0;
      this.currentMilliSeconds++;
    } else {
      return this.currentMilliSeconds;
    }  
  }

  twoDigitsNumber(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }

  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalIdMilliSeconds);
  }

  resetClick() {
    this.currentTime = 0;
    this.currentMilliSeconds = 0;
    printTime()
  }

  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    let milliSeconds = this.twoDigitsNumber(this.getMilliSeconds());
    return `${minutes}:${seconds}:${milliSeconds}`
  }
}
