class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    const intervalId = setInterval(() => {
      this.currentTime++;
      // console.log(this.currentTime)
    }, 1000);
  }


  getMinutes = () => Math.floor(this.currentTime / 60);

  getSeconds = () => this.currentTime%60;

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