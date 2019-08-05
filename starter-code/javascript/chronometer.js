class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  startClick() {
   this.intervalId = setInterval(() => { 
     this.currentTime += 1;
    }, 1000);
  }
  getMinutes() {
    return this.twoDigitsNumber(Math.floor(this.currentTime / 60));
  }
  getSeconds() {
    return this.twoDigitsNumber(Math.floor(this.currentTime % 60));
  }
  twoDigitsNumber(value) {
    if(value < 10) return `0${value}`;
    return `${value}`;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    stopClick();
    this.currentTime = 0;
  }
  splitClick() {}
}