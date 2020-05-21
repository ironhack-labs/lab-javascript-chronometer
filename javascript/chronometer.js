class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    setInterval(() => this.currentTime++, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return Math.floor(this.currentTime - this.getMinutes(this.currentTime) * 60);
  }

  twoDigitsNumber(time) {
    const parsedTime = time.toString();
    return parsedTime.length === 1 ? `0${parsedTime}` : parsedTime;
  }

  stopClick() {
    clearInterval(this.intervalId);
  }
  
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}