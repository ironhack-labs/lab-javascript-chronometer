class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(printTime) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTime) {
        printTime();
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }
  twoDigitsNumber(num) {
    // ... your code goes here
    const timeStr = "0" + num;
    console.log(timeStr);
    return timeStr.slice(-2);
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
    let splitTime =
      this.twoDigitsNumber(this.getMinutes()) +
      ":" +
      this.twoDigitsNumber(this.getSeconds());
    return splitTime;
  }
}
