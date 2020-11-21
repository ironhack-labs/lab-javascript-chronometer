class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  
  startClick(printTime) {
    this.intervalId = setInterval((() => {
      this.currentTime++;
    }), 1000);
    if (printTime) printTime();
  }

  getMinutes() {
    this.currentTime = this.currentTime / 60;
    return Math.floor(this.currentTime); 
  }
  getSeconds() {
    this.currentTime = this.currentTime % 60;
    return Math.floor(this.currentTime);
  }
  twoDigitsNumber(value) {
    return ('0' + value).slice(-2);
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    return `${min}:${sec}`
  }
}