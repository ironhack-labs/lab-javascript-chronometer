class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback(this.currentTime);
      }
    }, 1000);   
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(number) {
    if (number < 10) {
      return `0${number.toString()}`;
    }
    return number.toString();
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    let minute = this.getMinutes();
    let second = this.getSeconds();
    if (minute < 10 && second < 10) {
      return `0${minute}:0${second}`;
    } else if (minute < 10 && second > 10) {
      return `0${minute}:${second}`;
    } else if (minute > 10 && second < 10) {
      return `${minute}:0${second}`;
    }
    return `${minute}:${second}`;
  }
}