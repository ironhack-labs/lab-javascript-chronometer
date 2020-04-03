class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.minutes = 0;
    this.seconds = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback()
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    this.minutes = Math.floor(this.currentTime / 60);
    return this.minutes;
  }
  getSeconds() {
    // ... your code goes here
    this.seconds = this.currentTime % 60;
    return this.seconds;
  }

  twoDigitsNumber(number) {
    if (number < 10) {
      return '0' + number
    } else {
      return '' + number
    }
  }

  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
    this.minutes = this.twoDigitsNumber(this.minutes)
    this.seconds = this.twoDigitsNumber(this.seconds)
    return `${this.minutes}:${this.seconds}`
  }
}