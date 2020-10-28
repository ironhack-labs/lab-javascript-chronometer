class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
    //this.milliseconds = 0;
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      callback();
    }, 1000);
  }
  getMinutes() {
    // ... your code goes here
    const minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }
  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  //getMilliseconds() {
  //  return this.milliseconds;
  //}
  //
  //startMilliseconds() {
  //  this.intervalId = setInterval(() => {
  //    this.milliseconds++;
  //  }, 1);
  //}

  twoDigitsNumber(num) {
    // ... your code goes here
    const timeStr = "0" + num;
    const finalTimeString = timeStr.slice(-2);
    return finalTimeString;
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
    const minutes = this.twoDigitsNumber(this.getMinutes());
    const seconds = this.twoDigitsNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}
