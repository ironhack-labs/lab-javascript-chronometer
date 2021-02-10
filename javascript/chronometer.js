class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    const intervalId = setInterval(() => {
      this.currentTime ++;
      callback();
    },10);
    this.intervalId = intervalId;
   }
  
  getMinutes() {
     let minutes = this.currentTime / 6000; 
     return Math.floor(minutes);
  }

  getSeconds() {
    let seconds = (this.currentTime % 6000)/100;
    return Math.floor(seconds);
  }

  getMilliseconds() {
    let milliseconds = this.currentTime % 100;
    return milliseconds;
  }

  twoDigitsNumber(num) {
    if (num < 10) {
      return `0${num.toString()}`;
    } else {
      return num.toString();
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime =0;
  }
  splitClick() {
  
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMilliseconds())}`;
  }
}