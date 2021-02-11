class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      callback();
      console.log("hello" + this.currentTime);
    }, 1000);
  }

  // let counter = 0;
  // const intervalId = setInterval(() => {
  //   counter++;
  //   console.log("hello " + counter); // every second, we'll get a hello in the console
  //   if (counter === 10) clearInterval(intervalId)
  // }, 3000);

  getMinutes() {
    if (this.currentTime === 0) {
      return this.currentTime;
    } else {
      return Math.floor(this.currentTime / 60);
    }
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return this.currentTime;
    } else {
      return Math.round(this.currentTime % 60);
    }
  }

  twoDigitsNumber(value) {
    let twoDigitsNumber = value;

    if (twoDigitsNumber < 10) {
      twoDigitsNumber = "0" + twoDigitsNumber;
    }
    return twoDigitsNumber.toString();
  }

  stopClick() {
    return clearInterval(this.intervalId);
  }
  
  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    let firstNum = this.twoDigitsNumber(min);
    let scndNum = this.twoDigitsNumber(sec);
    return `${firstNum}:${scndNum}`;
  }
}
