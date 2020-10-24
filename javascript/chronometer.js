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
    return clearInterval(this.intervalId);
  }
  resetClick() {
    return this.currentTime = 0;
  }
  splitClick() {
    let roundMinutes = getMinutes();
    let roundSeconds = getSeconds();

    let splitMinutes = twoDigitsNumber(roundMinutes);
    let splitSeconds = twoDigitsNumber(roundSeconds);

    return `${splitMinutes}:${splitSeconds}`;
  }
}
