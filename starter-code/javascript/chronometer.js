class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  startClick() {
   this.intervalId = setInterval(() => {
     this.currentTime += 1;
     printTime(this.getMinutes(), this.getSeconds(), this.getmiliSeconds());
   }, 10);
  }
  getMinutes() {
    return this.twoDigitsNumber(Math.floor((this.currentTime / 100) / 60));
  }
  getSeconds() {
    return this.twoDigitsNumber(Math.floor((this.currentTime / 100) % 60));
  }
  getmiliSeconds() {
    return this.twoDigitsNumber(Math.floor(this.currentTime % 100));
  }
  twoDigitsNumber(value) {
    if(value < 10) return `0${value}`;
    return `${value}`;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.stopClick();
    this.currentTime = 0;
  }
  splitClick() {
    return this.currentTime;
  }
}
