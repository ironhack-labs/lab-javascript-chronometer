class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {this.currentTime += 1;}, 1000);
    callback;
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime - (Math.floor(this.currentTime / 60) * 60);
  }
  twoDigitsNumber(numberToString) {
    return (numberToString > 10 ? String(numberToString) : `0` + numberToString);
  }
  stopClick() {
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    clearInterval(intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    
    if ((minutes < 10) && (seconds < 10)) {
      return `0${minutes}:0${seconds}`;
    } else if ((minutes < 10) && (seconds > 10)) {
      return `0${minutes}:${seconds}`;
    } else if ((minutes > 10) && (seconds < 10)) {
      return `${minutes}:0${seconds}`;
    } else {
      return `${minutes}:${seconds}`;
    };
  }
}
