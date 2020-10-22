class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    // ... your code goes here
   this.intervalId = setInterval( () => {
      this.currentTime++;
      if (callback) callback();
    }, 1000);
  }
  getMinutes() {
    // ... your code goes here
      let minute = this.currentTime /60
      return Math.floor (minute)
  }
  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime %60
      return Math.floor (seconds)
  }
  twoDigitsNumber(digits) {
    // ... your code goes here
    if (digits < 10) return `0${digits}`;
    return `${digits}`;
  }
  stopClick() {
    // ... your code goes here
    return clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
    return this.currentTime =0;
  }
  splitClick() {
    // ... your code goes here
    return this.twoDigitsNumber(this.getMinutes())+":"+ this.twoDigitsNumber(this.getSeconds())
  }
}
