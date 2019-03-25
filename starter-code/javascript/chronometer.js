class Chronometer {
  constructor() {
    this.currentTime = 0; 
    this.intervalId = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      this.setTime();
    }, 1000);
  }

  setMinutes() {
    return parseInt(this.currentTime / 60);
  }
  
  setSeconds() {
    return this.currentTime % 60;
  }
  
  twoDigitsNumber(value) {
    if(value < 10) {
      return "0" + value;
    }
    return value.toString();
  }

  setTime() {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
  }

  setMilliseconds() {
    return this.currentTime;
  }
  
  stopClick() {
    clearInterval(this.intervalId);
  }
  
  resetClick() {
    this.currentTime = 0;
    this.setTime();
  }
  
  // splitClick() {}
  // splitClick() {}
}