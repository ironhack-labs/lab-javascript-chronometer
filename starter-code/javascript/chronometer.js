class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.invertalId = 0;
  }

  startClick() {
    this.intervalId = setInterval(function () {
      this.currentTime++;
    }, 1000);
  }
  
  getMinutes() {
    return this.currentTime/60;
  }

  getSeconds() {
    return 0;
  }

  twoDigitsNumber(value) {
    return Math.round(value * 100)/100;
  }
  
  stopClick() {

  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {

  }

}