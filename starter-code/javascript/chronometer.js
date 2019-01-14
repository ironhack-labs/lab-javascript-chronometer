// Constructor
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      this.setTime();
      // console.log(this.currentTime); /* TEST */
      // console.log(this.setTime()); /* TEST */
    }, 1000);
  }

  setMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  setSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(number) {
    return ("0" + number).substr(-2);
  }

  setTime() {
    var seconds = this.setSeconds();
    var minutes = this.setMinutes();
    return this.twoDigitsNumber(minutes) + ":" + this.twoDigitsNumber(seconds);
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }
}
