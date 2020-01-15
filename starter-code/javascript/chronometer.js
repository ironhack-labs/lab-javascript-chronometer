class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = "id";
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      callback();
    }, 1000);
    console.log("Chronometer is started");
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
    // console.log(Math.floor(this.currentTime / 60));
  }
  getSeconds() {
    return Math.floor(this.currentTime % 60);
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
