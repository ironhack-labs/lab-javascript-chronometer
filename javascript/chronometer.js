class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    // ... your code goes here
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (callback) {
        printTime();
      }
    }, 1000);
  }
  getMinutes() {
    if (!this.currentTime) {
      return 0;
    }
    let minutes = Math.floor(this.currentTime / 60);

    return minutes;
  }
  getSeconds() {
    if (!this.currentTime) {
      return 0;
    }

    let seconds = this.currentTime - this.getMinutes() * 60;
    return seconds;
  }

  getMilliseconds() {

  }

  twoDigitsNumber(num) {
    const twoDigitNumber = "0" + num;
    twoDigitNumber.slice(-2);
    return twoDigitNumber;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return (
      this.twoDigitsNumber(this.getMinutes()) +
      ":" +
      this.twoDigitsNumber(this.getSeconds())
    );
  }
}
