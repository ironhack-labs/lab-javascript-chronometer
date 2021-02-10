class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval((callback) => {
      this.currentTime++;
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
  twoDigitsNumber() {
    //pending
    let twoDigitsNumber = "";

    if (twoDigitsNumber.length < 2) {
      twoDigitsNumber = "0" + twoDigitsNumber
    }
    return twoDigitsNumber;
    //pending
  }
  stopClick(clean) {
    return clearInterval(clean);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick( number1, number2) {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    let array = [];
console.log("hello" + array)
    return array.push(`${min},${sec}`);
  }
}
