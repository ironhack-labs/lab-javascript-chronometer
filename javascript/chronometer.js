class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    
    this.intervalId = setInterval( () => this.currentTime++, 1000);
    
  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime/60);
    return minutes;
  }
  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }
  twoDigitsNumber(time) {
    let timeStr = '';

    if (time === 0) {
      timeStr = '00';
    } else if (time < 10) {
      timeStr = '0' + time;
    } else {
      timeStr = timeStr + time;
    }
    return timeStr;
  }

  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let minutesStr = this.twoDigitsNumber(this.getMinutes());
    let secondsStr = this.twoDigitsNumber(this.getSeconds());

    return minutesStr + ':' + secondsStr;
  }
}
