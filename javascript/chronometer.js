class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    let minutes = 0;
    minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }
  getSeconds() {
    getSeconds() {
      let seconds = 0;
      seconds = this.currentTime % 60;
      return seconds;
    }
  }
  twoDigitsNumber(number) {
    if (number < 10){
      return `0${number}`;
    } 
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
