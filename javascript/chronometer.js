class Chronometer {
  constructor( ) {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => this.currentTime++, 1000)
  }
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60)  ;
  
  }
  getSeconds() {
    // ... your code goes here
    return (Math.floor(this.currentTime % 60));
  }
  twoDigitsNumber() {
    return (this.getMinutes()).toString() + (this.getSeconds()).toString();
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes) + `:` + this.twoDigitsNumber(this.getSeconds); ;
  }
}
