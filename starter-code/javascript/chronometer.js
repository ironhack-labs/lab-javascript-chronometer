class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = "id";
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      // this is what we were expected because of the fat arrow function used as callback
      this.currentTime += 1;
      callback();
    }, 10);
    console.log("Chronometer is started");
  }
  getMinutes() {
    return Math.floor(this.currentTime / (60 * 100));
  }
  getSeconds() {
    return Math.floor(this.currentTime / 100);
  }
  getMilliSeconds() {
    return Math.floor(this.currentTime % 100);
  }
  twoDigitsNumber(number) {
    return number < 10 ? `0${number}` : String(number);
  }
  stopClick() {
    clearInterval(this.intervalId);
    console.log("Chronometer is stopped");
  }
  resetClick() {
    this.currentTime = 0;
    console.log("Chronometer was reset");
  }
  splitClick() {
    console.log("Chronometer was splitted");
  }
}
