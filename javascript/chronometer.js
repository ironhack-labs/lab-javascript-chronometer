class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

startClick (callback) {
  this.intervalId = setInterval(() => {
    this.currentTime += 1;
    console.log(this.twoDigitsNumber(this.getMinute()));
  }, 1000);
}

  getMinutes() {
    // ... your code goes here
    let minutes = Math.trunc(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.getMinutes() *60;
    return this.currentTime - seconds;
  }

  twoDigitsNumber(num) {
    if (num < 10) {
      return `0${num}`;
    }
  else {
    return `${num}`;
    }
  }

  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
    return this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber}:${this.getSeconds())}`;
  }
}
