class Chronometer {


  constructor() {

    this.currentTime = 0;
    this.intervalId = 0;

  }


  startClick() {

    this.intervalId = setInterval(() => { this.currentTime++; }, 1000);
    console.log("starting the chronometer");

  }


  getMinutes() {

    return Math.floor(this.currentTime / 60);
  }


  getSeconds() {

    return this.currentTime - this.getMinutes() * 60;

  }


  twoDigitsNumber(value) {

    if (value < 10) return String("0" + String(value))
    else return String(value);

  }

  stopClick() {

    clearInterval(this.intervalId);
    this.intervalId = 0;
    console.log("stopping the chronometer");


  }
  resetClick() {

    this.currentTime = 0;

  }
  // splitClick() {}
}