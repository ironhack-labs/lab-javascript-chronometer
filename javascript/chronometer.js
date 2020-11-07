class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (callback) {
        callback();
      } 
    }, 1000)
  }
  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60) ; 
    return minutes;
  }
  getSeconds() {
    const seconds = Math.floor(this.currentTime % 60);
    return seconds;
  }
  twoDigitsNumber(number) {
    if (number < 10) {
    return `0${number}`;
  } else {
    return `${number}`;
  }
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
    return `${min}:${sec}`;
  }
}
