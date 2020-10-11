class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }
  getMinutes() {
    let inMinutes = 0;
    if(this.currentTime == 0) {
      return 0;
    }
    if(this.currentTime != 0) {
      inMinutes = this.currentTime / 60;
      return parseInt(inMinutes);
    }
  }
  getSeconds() {
    let seconds = 0;
    if(this.currentTime == 0) {
      return 0;
    }
    if(this.currentTime != 0) {
      seconds = this.currentTime - (this.getMinutes(this.currentTime) * 60);
      return parseInt(seconds);
    }
  }
  twoDigitsNumber(value) {
    if(value < 10) {
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
    let min = this.getMinutes();
    let sec = this.getSeconds();
    
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`;
  }
}