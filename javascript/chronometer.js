class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
    this.milliId = 0;
    this.millisec = 0;
  }

  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.millisec += 1;
      if (this.millisec >= 100) {
        this.currentTime += 1;
        this.millisec = 0;
      }
      callback && callback();

    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Number(Math.floor(this.currentTime / 60).toFixed());
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60;
    return seconds;
  }

  getMilliseconds() {
    // ... your code goes here
    console.log(this.millisec);
    return this.millisec;
  }

  twoDigitsNumber(value) {
    // ... your code goes here
    value = value + "";
    let result = "";
    switch (value.length) {
      case 0:
        result = "00";
        break;

      case 1:
        result = `0${value}`;
        break;

      case 2:
        result = value;
        break;
    }
    return result;
  }

  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
    this.millisec = 0;
  }

  splitClick() {
    // ... your code goes here
    let time = this.currentTime;
    time = `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMilliseconds())}`;
    return time;
  }
}