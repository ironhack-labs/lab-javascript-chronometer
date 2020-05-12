class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval( () => {
      this.currentTime++;
      if(typeof callback === 'function'){
        callback();
      }
    }, 10)
  }
  getMinutes() {
    return Math.floor((this.currentTime/100)/60);
  }
  getSeconds() {
    return Math.floor((this.currentTime/100) % 60);
  }
  getCentiseconds() {
    return this.currentTime % 100;
  }
  twoDigitsNumber(number) {
    if(Number(number) < 10){
      return '0' + number;
    }
    return String(number);
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + ':' + this.twoDigitsNumber(this.getSeconds()) + ':' + this.twoDigitsNumber(this.getCentiseconds())
  }
}
