class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    var chrono = this;
    this.intervalId = setInterval(function() {
      chrono.currentTime++;
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(num) {
    if (num < 10) {
      return "0" + num;
    }
    return num.toString();
  }
   stopClick() {
     clearInterval(this.intervalId);
   }
  
  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}
