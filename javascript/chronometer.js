class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    // ... your code goes here
    setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60);
  }
  twoDigitsNumber(value) {
    // ... your code goes here
    if (value >= 10) {
      return value.toString();
    } else {
      return "0" + value.toString();
    }
  }
  stopClick() {
    // ... your code goes here
    return clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
    return (this.currentTime = 0);
  }
  splitClick() {
    // ... your code goes here
    return (
      this.twoDigitsNumber(this.getMinutes()).toString() +
      ":" +
      this.twoDigitsNumber(this.getSeconds()).toString()
    );
  }
}
