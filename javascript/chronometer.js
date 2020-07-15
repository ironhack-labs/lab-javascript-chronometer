class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval( () => {
      this.currentTime += 1;
      callback();
    }, 10)
  }

  getMinutes() {
    let minutes = ((this.currentTime/100) - (this.currentTime/100) % 60)/60;
    return minutes;
  }
  getSeconds() {
    let seconds = Math.floor((this.currentTime/100)%60);
    return seconds;
  }

  getMilliseconds() {
    let milliseconds = (this.currentTime % 100);
    return milliseconds;
  }


  twoDigitsNumber(num) {
    let twoDigitNum = '';
    if (num < 10) {
      twoDigitNum = `0${num}`;
    }
    else {
      twoDigitNum = `${num}`;
    }
    return twoDigitNum;
  }



  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    let mins = this.twoDigitsNumber(this.getMinutes());
    let secs = this.twoDigitsNumber(this.getSeconds());
    let mils = this.twoDigitsNumber(this.getMilliseconds());
    return `${mins}:${secs}:${mils}`;
  }
}
