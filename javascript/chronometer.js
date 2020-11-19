class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;

  };
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      return this.currentTime++;
    }, 1000);
  };
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  };
  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60);
  };
  twoDigitsNumber(num) {
    // ... your code goes here
    if (num < 10) {
      return `0${num}`;
    } else {
      return `${num}`;
    }
  };
  stopClick() {
    // ... your code goes here
    return clearInterval(this.startClick);
  };
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
  };
  splitClick() {
    // ... your code goes here
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
};
