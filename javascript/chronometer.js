class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId1 = 0;
    this.intervalId2 = 0;
    this.currentMilliSec = 0;
  }
  startClick(printTime, printMilliseconds) {
    this.intervalId1 = setInterval(() => {
      this.currentTime++;

      if (printTime) {
        return printTime();
      }
    }, 1000);

    this.intervalId2 = setInterval(() => {
      if (this.currentMilliSec === 99) {
        this.currentMilliSec = 0;
      }
      this.currentMilliSec++;
      if (printMilliseconds) {
        return printMilliseconds();
      }
    }, 10);
  }
  getMinutes() {
    // ... your code goes here
    return parseInt(this.currentTime / 60);
  }
  getSeconds() {
    // ... your code goes here
    const minutes = this.getMinutes();
    const minutesInSec = minutes * 60;
    const remainingSeconds = this.currentTime - minutesInSec;
    return remainingSeconds;
  }

  twoDigitsNumber(num) {
    // ... your code goes here
    const timeString = "0" + num;
    return timeString.slice(-2);
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId1);
    clearInterval(this.intervalId2);
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
    this.currentMilliSec = 0;
  }
  splitClick() {
    // ... your code goes here
    const seconds = this.twoDigitsNumber(this.getSeconds());
    const minutes = this.twoDigitsNumber(this.getMinutes());
    let milliseconds = this.twoDigitsNumber(this.currentMilliSec);

    return `${minutes}:${seconds}:${milliseconds}`;
  }
}
