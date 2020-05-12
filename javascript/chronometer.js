class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.milliCurrentTime = 0;
    this.milliintervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(()=>{
      this.currentTime++;
      let min = this.getMinutes();
      let sec = this.getSeconds();
      let minString = this.twoDigitsNumber(min);
      let secString = this.twoDigitsNumber(sec);
      callback(minString, secString);
    }, 1000);
  }

  startClickMilli(callback){
    this.milliintervalId = setInterval(()=>{
      this.milliCurrentTime++;
      let mil = this.getMilliseconds();
      let milString = this.twoDigitsNumber(mil);
      callback(milString);
    }, 1);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime/60);
    return minutes;
  }

  getSeconds() {
    let seconds = this.currentTime%60;
    return seconds;
  }

  getMilliseconds(){
    let milliseconds = this.milliCurrentTime%100;
    return milliseconds;
  }

  twoDigitsNumber(num) {
    if (num < 10){
      return `0${num}`
    } else {
      return num.toString();
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.milliintervalId);
  }

  resetClick() {
    this.currentTime = 0;
    this.milliCurrentTime = 0;
  }

  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    let mil = this.getMilliseconds();
    let result = `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}:${this.twoDigitsNumber(mil)}`;
    return result;
  }
}
