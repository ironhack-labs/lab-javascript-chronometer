class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.miliSecondsInterval = 0;
    this.miliSeconds = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval( () => this.currentTime++, 1000);
    this.miliSecondsInterval = setInterval( () => this.miliSeconds++, 10);
  }

  startMiliSeconds() {
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

  getMiliseconds() {
    let miliSeconds = this.miliSeconds;
    return miliSeconds;
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
    clearInterval(this.miliSecondsInterval);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let minutesStr = this.twoDigitsNumber(this.getMinutes());
    let secondsStr = this.twoDigitsNumber(this.getSeconds());
    let milSecsStr = this.getMiliseconds();
    
    if (this.getMiliseconds() > 100) {
      milSecsStr = this.twoDigitsNumber(Math.floor(milSecsStr)/10);
    } else {
      milSecsStr = this.twoDigitsNumber(milSecsStr);
    }
    

    return minutesStr + ':' + secondsStr + ':' + milSecsStr;
  }
}
