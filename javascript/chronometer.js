class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
   
  }
  startClick(callback) {
    const intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1;
    }, 1000);
    
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }
  twoDigitsNumber() {
    let min = (this.minutes = this.currentTime / 60);
    let minSec = min - Math.floor(min);
    return Math.round(minSec * 60);
  }
  twoDigitsNumber(value) {
    let string = value.toString();
    if (string.length === 1) {
      return "0" + string;
    } else {
      return string;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return (
      this.twoDigitsNumber(this.getMinutes()) +
      ":" +
      this.twoDigitsNumber(this.getSeconds())
    );
  }
}
