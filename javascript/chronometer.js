class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.on = false;
  }

  startClick(callback) {
    this.on = true;
    this.intervalId = setInterval(() => {
     this.currentTime += 1
   },10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100);
  }

  getMiliseconds(){
    return this.currentTime % 100;
  }

  twoDigitsNumber(n) {
    if ( n < 10) {
      return "0" + n;
    } return n;
  }

  stopClick() {
    this.on = false;
    clearInterval(this.intervalId);
  }

  isStopped(){
    return ! this.on;
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
   return this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds()) + ":" + this.twoDigitsNumber(this.getMiliseconds());
  }
}
