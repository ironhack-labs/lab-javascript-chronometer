class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = 0
  }
//The setInterval() will be assigned to our intervalId property, so this way, we will be able to clear it later on when we need to restart the timer.

  startClick(toto) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      toto();
     }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(callback) {
    let number = callback.toString();
    if (number.length == 1) {
      number = "0" + number
    } ;
    return number;
  }
// HOW DO WE REWRITE THIS IN TERNARY ?

  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    let splitTime;

    if (min < 10 && sec < 10) {
      splitTime = `${0}${min}:${0}${sec}`;
    } else if (min < 10 && sec > 10) {
      splitTime = `0${min}:${sec}`;
    } else if (min > 10 && sec < 10) {
      splitTime = `${min}:0${sec}`;
    } else {
      splitTime = `${min}:${sec}`;
    }

    return splitTime;
  }
}
