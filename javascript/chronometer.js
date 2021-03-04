class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
   this.intervalId = setInterval(() => {
     this.currentTime += 1
   },1000)
  }

  getMinutes() {
    return Math.round(this.currentTime / 60);
  }

  getSeconds() {
   return (this.currentTime % 60);
  }

  twoDigitsNumber(n) {
    if ( n < 10) {
      return "0" + n;
    }
    else {
      return toString(n);
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
   return this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds());
  }
}
