class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      if (callback) {
        callback();
      }
      this.currentTime++;
    }, 1);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }
  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60; // setInterval was too slow for a second if I put this.currentTime/1000
  }

  getMilliseconds() {
    return Math.floor(this.currentTime);
  }

  twoDigitsNumber(value) {
    if (String(value).length >= 3) {
      const aux = String(value);
      return aux[aux.length - 2] + aux[aux.length - 1];
    }
    return String(value).padStart(2, "0");
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(
      this.getSeconds()
    )}:${this.twoDigitsNumber(this.getMilliseconds())}`;
  }
}
