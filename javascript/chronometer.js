class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      console.log(this.splitClick());
    }, 1000); 
  }
  getMinutes() {
    let minutes = Math.trunc(this.currentTime / 60);
    return minutes;
  }
  getSeconds() {
    let seconds = this.getMinutes() *60;
    return this.currentTime - seconds;
  }
  twoDigitsNumber(num) {
    if (num < 10){
      return `0${num}`;
    }
    else {
      return `${num}`;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    return this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(
      this.getSeconds() )}`;
    }
}