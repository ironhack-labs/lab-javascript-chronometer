class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    const incrementSec = setInterval(() => {
      this.currentTime++; 
    }, 1000);
  }
  getMinutes() {
    let roundMinutes = Math.floor(this.currentTime / 60);
    return roundMinutes;
  }
  getSeconds() {
    let roundSeconds = this.currentTime % 60;
    return roundSeconds;
  }
  twoDigitsNumber(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }
  stopClick() {
    const incrementSec = setInterval(() => {
      this.currentTime++; 
    }, 1000);

    return clearInterval(incrementSec);
  }
  resetClick() {
    return this.currentTime = 0;
  }
  splitClick() {
    let roundMinutes = Math.floor(this.currentTime / 60);
    let roundSeconds = this.currentTime % 60;

    let splitMinutes = roundMinutes < 10 ? `0${roundMinutes}` : `${roundMinutes}`;
    let splitSeconds = roundSeconds < 10 ? `0${roundSeconds}` : `${roundSeconds}`;

    return `${splitMinutes}:${splitSeconds}`;
  }
}
