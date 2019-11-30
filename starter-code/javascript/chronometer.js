class Chronometer {
    constructor() {
      this.currentTime = 0;
      this.intervalId = 0;
    }
    startClick() {
      this.intervalId = setInterval(() => (this.currentTime += 1), 1000);
    }
    getMinutes() {
      return Math.floor(this.currentTime / 60);
    }
    getSeconds() {
      let minutes = Math.floor(this.currentTime / 60);
      let seconds = this.currentTime - minutes * 60;
      if (seconds >= 60) {
        seconds = 0;
      }
      return seconds;
    let currentTime
  }
  // startClick() {}
  // getMinutes() {}
  // getSeconds() {}
  twoDigitsNumber() {}
  // stopClick() {}
  // resetClick() {}
  // splitClick() {}
}