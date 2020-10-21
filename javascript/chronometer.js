class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;

    this.currentMilliseconds = 0;
    this.intervalMilliseconds = 0;
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);

    this.intervalMillisecondsId = setInterval(() => {
      this.currentMilliseconds++;
      callback ? callback() : null;
    }, 10);
  }
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }
  getMilliseconds() {
    return this.currentMilliseconds % 100;
  }
  twoDigitsNumber(number) {
    // ... your code goes here
    const string = number.toString();
    if (string.length === 1) {
      return `0${string}`;
    } else {
      return string;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalMillisecondsId);
    // ... your code goes here
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
    this.currentmilliseconds = 0;
  }

  splitClick() {
    const min = this.getMinutes();
    const sec = this.getSeconds();
    const mili = this.getMilliseconds();
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(
      sec
    )}:${this.twoDigitsNumber(mili)}`;
  }
}
