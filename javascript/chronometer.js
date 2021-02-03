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
    let minutes = Math.floor(this.currentTime / 60)
    if (minutes >= 1) {
      return minutes
    } else {
      return minutes = 0;
    }

  }
  getSeconds() {
    // ... your code goes here
    if (this.currentTime === 0) return this.currentTime;
    return this.currentTime % 60;
  }
  twoDigitsNumber(number) {
    // ... your code goes here
    let newNumber = number.toString();

    if (newNumber.length === 1) {
      return `0${newNumber}`
    } else {
      return newNumber
    }
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
    let min = this.getMinutes();
    let sec = this.getSeconds();

    switch (true) {
      case (min < 10 && sec < 10):
        return `${0}${min}:${0}${sec}`;
      case (min < 10 && sec > 10):
        return `0${min}:${sec}`;
      case (min > 10 && sec < 10):
        return `${min}:0${sec}`;
      default:
        return `${min}:${sec}`
    }
  }
}