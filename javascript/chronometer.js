class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(
      () => this.currentTime++, 1000)
  }
  getMinutes() {
    let minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }
  getSeconds() {
    return this.currentTime % 60;

  }
  twoDigitsNumber(numberToString) {
      return (numberToString > 10 ? String(numberToString) : `0` + numberToString);
    }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
   let minutes = this.twoDigitsNumber(this.getMinutes());
   let seconds = this.twoDigitsNumber(this.getSeconds());
   return `${minutes}:${seconds}`;
    }}