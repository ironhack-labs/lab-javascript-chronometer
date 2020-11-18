class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      console.log("ok");
      this.currentTime += 1;
      //callback;
    }, 1000);
  }
  getMinutes() {
    return Math.trunc(this.currentTime / 60);
  }
  getSeconds() {
    let minutes = this.getMinutes();
    let seconds = minutes * 60;
    return this.currentTime - seconds;
  }
  twoDigitsNumber() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();

    if (minutes < 10) {
      return `0${minutes}`;
    }

    if (seconds < 10) {
      return `0${seconds}`;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    return (this.currentTime = 0);
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());

    return `${min}:${sec}`;
  }
}
