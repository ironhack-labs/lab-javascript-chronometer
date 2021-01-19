class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    // ... your code goes here
  }
  startClick(callback) {
    this.setIntervalId = setInterval(()=> {
      this.currentTime++;
    }, 1000);
    // ... your code goes here
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
    // ... your code goes here
  }
  getSeconds() {
    return this.currentTime % 60;
    // ... your code goes here
  }
  twoDigitsNumber() {
    const minutes = String(this.getMinutes()).padStart(2, '0');
    const seconds = String(this.getSeconds()).padStart(2, '0');
    return `${minutes}:${seconds}`;
    // ... your code goes here
  }
  stopClick() {
    return clearInterval(this.intervalId);
    // ... your code goes here
  }
  resetClick() {
    this.currentTime = 0;
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}
