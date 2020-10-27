class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    // ... your code goes here
  }
  startClick(callback) {
    const intervalId = setInterval(() => {
      this.currentTime++
    }, 1000)
    // ... your code goes here
  }
  getMinutes() {

    return Math.floor(this.currentTime / 60);
    // ... your code goes here
  }
  getSeconds() {

    return Math.floor(this.currentTime % 60);
    // ... your code goes here
  }
  twoDigitsNumber(number) {

    return number.toString();
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
