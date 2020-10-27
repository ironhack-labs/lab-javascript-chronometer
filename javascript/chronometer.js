class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.currentTimeInMs = 0;
    this.intervalMsId = 0; 
  }
  startClick(callbackTime, callbackMs) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callbackTime) {
        callbackTime();
      }
    }, 1000);
    this.intervalMsId = setInterval(() => {
      this.currentTimeInMs++;
      if (this.currentTimeInMs > 99) {
        this.currentTimeInMs = 0; 
      }
      if (callbackMs) {
        callbackMs();
      }
    }, 10);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    const minutes = this.getMinutes(); 
    return this.currentTime - (minutes * 60);
  }
  getMiliseconds() {
    return this.currentTimeInMs;
  }
  twoDigitsNumber(value) {
    const str = value.toString();
    return str.length > 1 ? str : `0${str}`; 
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalMsId);
  }
  resetClick() {
    this.currentTime = 0;
    this.currentTimeInMs = 0;
  }
  splitClick() {
    const minutes = this.twoDigitsNumber(this.getMinutes());
    const seconds = this.twoDigitsNumber(this.getSeconds()); 
    return `${minutes}:${seconds}`;
  } 
}
