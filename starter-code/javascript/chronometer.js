class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    let fixThis = this;
    fixThis.intervalId = setInterval(function(){fixThis.currentTime++; printTime();}, 10);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }
  getSeconds() {
    return Math.floor((this.currentTime - (this.getMinutes()*6000))/100);
  }
  getMilliSeconds(){
    return Math.floor(this.currentTime - (this.getMinutes()*6000) - (this.getSeconds()*100));
  }
  twoDigitsNumber(value) {
    return (value < 10) ? `0${value}`: `${value}`;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())} : ${this.twoDigitsNumber(this.getSeconds())} : ${this.twoDigitsNumber(this.getMilliSeconds())}`;
  }
};