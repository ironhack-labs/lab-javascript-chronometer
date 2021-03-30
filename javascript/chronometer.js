class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {this.currentTime++}, 1000);
    
    if(callback) callback();
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(timeArg) {
    let time = 0;
    let timeString = '';
    
    timeArg ? time = timeArg : time = this.currentTime;
    
    time < 10 ? timeString += `0${time}` : timeString += `${time}`;

    return timeString;
  }
  stopClick() {
    clearInterval();
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  }
}
