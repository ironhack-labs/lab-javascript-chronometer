class Chronometer {
  constructor() {
      this.currentTime = 0;
      this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    this.currentTime = Math.floor(this.currentTime / 60);
    return this.currentTime;
  }
  getSeconds() {
    if (this.currentTime <= 0) {
      return this.currentTime;
    } else {
      return this.currentTime % 60;
    }
  }
  twoDigitsNumber(result) {
    if (result < 10) { 
      result = "0" + result;
      return result;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    if (min < 10 && sec < 10) {
      return `0${min}:0${sec}`;
    } else if (min < 10 && sec >= 10) {
      return `0${min}:${sec}`;
    } else {
      return `${min}:${sec}`;
    }
  };
}
