class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  startClick() {
    /*this.intervalId = setInterval(() => this.currentTime++, 1000);*/
    this.intervalId = setInterval(() => {this.currentTime++; printTime()}, 1000);
  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime/60);
    return minutes;
  }
  getSeconds() {
    let seconds = this.currentTime - Math.floor(this.currentTime/60)*60;
    return seconds;
  }

  twoDigitsNumber(value) {
    if(value<10) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }
  
  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())} : ${this.twoDigitsNumber(this.getSeconds())}`
  }
}