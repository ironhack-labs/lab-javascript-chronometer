class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => this.currentTime += 1, 1000);
    if (callback) {
      callback(this.currentTime);
    }
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    const minutes = this.getMinutes(); 
    return this.currentTime - (minutes * 60);
  }
  twoDigitsNumber(value) {
    const str = value.toString();
    return str.length > 1 ? str : `0${str}`; 
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    const minutes = this.twoDigitsNumber(this.getMinutes());
    const seconds = this.twoDigitsNumber(this.getSeconds()); 
    return `${minutes}:${seconds}`;
  } 
}
