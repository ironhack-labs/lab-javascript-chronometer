class Chronometer {
  constructor() {
    this.currentTime = 0;

  }
  startClick() {

    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    if (this.currentTime <= 0) {
      return 0;
    } else {
      return this.currentTime - this.getMinutes() * 60;


    }

  }

  twoDigitsNumber(a) {
    if (a < 10) {
      return `0${a}`
    }
    return `${a}`;

  }



  stopClick() {
    clearInterval(this.intervalId)
  }



  resetClick() {
    this.currentTime = 0;
  }


  splitClick() {
    return `${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}`;
  }
}