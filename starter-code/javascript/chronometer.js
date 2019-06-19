class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.currentTime += 1;
  }
  getMinutes() {
    return (this.currentTime > 60) ? Math.floor(this.currentTime / 60) : 0;
  }
  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(time) {
    time > 9 ? time = `${time}` : time = `0${time}`;
    return time;
  }
  stopClick() {
    clearInterval(this.intervalId);
    
  }
  resetClick() {
    this.stopClick();
    this.currentTime = 0;
    
    clearSplits();
  }
  splitClick() {
    return`${this.getMinutes()}:${this.getSeconds()}`;
  }
}
