class Chronometer {
  constructor() {
    // ... your code goes here

    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    // ... your code goes here
    setInterval(() => (this.currentTime += 1), 1000);
  }
  getMinutes() {
    // ... your code goes here
    return (this.currentTime = Math.floor(this.currentTime / 60));
  }
  getSeconds() {
    // ... your code goes here

    if (this.currentTime === 0) {
      return 0;
    } else {
      return this.currentTime - this.getMinutes() * 60;
    }
  }
  twoDigitsNumber() {
    // ... your code goes here

    let min = this.getMinutes().toString();

    if (min < 10) {
      return `${0}${min}`;
    } else if (min >= 10) {
      return `${min}`;
    }

    let sec = this.getSeconds().toString();

    if (sec < 10) {
      return `${0}${sec}`;
    } else if (sec >= 10) {
      return `${sec}`;
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
    let min = this.getMinutes();
    let sec = this.getSeconds();

    if (min < 10 && sec < 10) {
      return `${0}${min}:${0}${sec}`;
    } else if (min < 10 && sec > 10) {
      return `${0}${min}:${sec}`;
    } else if (min > 10 && sec < 10) {
      return `${min}:${0}${sec}`;
    } else {
      return `${min}:${sec}`;
    }
  }
}
