class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => { this.currentTime++ ;if (callback) callback(); }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    let currentTimeMin = Math.floor(this.currentTime / 60);
    return currentTimeMin;
  }
  getSeconds() {
    // ... your code goes here
    let currentTimeSec = this.currentTime % 60;
    return currentTimeSec;
  }
  twoDigitsNumber(value) {
    // ... your code goes here
    if (value < 10) return `0${value}`;
    return `${value}`;
  }
  stopClick() {
    clearInterval(this.currentTime)
  }
  resetClick() {
    // ... your code goes here
    clearInterval(this.currentTime)
    this.currentTime = 0
  }
  splitClick() {
    // ... your code goes here
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
    
  }
}
