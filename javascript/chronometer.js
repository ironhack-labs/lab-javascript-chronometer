class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = 0;
  }
  startClick(callback) {

    this.intervalId = setInterval(() => {
      this.currentTime ++
    }, 1000)

  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);

  }
  getSeconds() {
    return this.currentTime - this.getMinutes() * 60;
  }
  twoDigitsNumber() {
    return this.getMinutes() + this.currentTime.toLocaleString()

    //why do we have a length of 2 here ?
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    return this.currentTime = 0;
  }
  splitClick() {
    this.twoDigitsNumber.toLocaleString()
  }
}
