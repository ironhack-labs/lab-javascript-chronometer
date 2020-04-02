class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      return callback();
    }, 1000);
  }

  getMinutes() {
    let currentMinutes = Math.floor(this.currentTime / 60);
    return currentMinutes;
  }
  
  getSeconds() {
    let currentSeconds = this.currentTime % 60;
    return currentSeconds;
  }

  twoDigitsNumber(number) {
    let stringedNumber = number.toString();
    if (stringedNumber.length === 1) {
      stringedNumber = `0${number}`;
    }
    return stringedNumber;
  }

  stopClick() {
    clearInterval(this.intervalId);  
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    let seconds = this.twoDigitsNumber(this.getSeconds()); 
    let minutes = this.twoDigitsNumber(this.getMinutes());
    return `${minutes}:${seconds}`;
  }
}
