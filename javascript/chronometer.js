class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000)
  }
  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 60);
    return minutes >= 1 ? minutes : 0;
  }
  getSeconds() {
    // ... your code goes here
    if (this.currentTime === 0) return this.currentTime;
    return this.currentTime % 60;
  }
  twoDigitsNumber(number) {
    // ... your code goes here
    return newNumber < 10 ? `0${newNumber}` : newNumber;
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
    const min = this.twoDigitsNumber(this.getMinutes());
    const sec = this.twoDigitsNumber(this.getSeconds());

    return `${min}:${sec}`;
  }
}