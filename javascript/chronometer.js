class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    // ... your code goes here
    setInterval( () => this.currentTime++, 1000);
  }
  
  getMinutes() {
    // ... your code goes here
    const minutos = Math.floor(this.currentTime/60)
    return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    // ... your code goes here
  }
  twoDigitsNumber() {
    // ... your code goes here
  }
  stopClick() {
    // ... your code goes here
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}
