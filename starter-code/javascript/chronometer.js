class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId ;
  }
  startClick() {
    this.intervalId = setInterval(() => {this.currentTime += 1;},10);
  }
  getMinutes() {
    return Math.floor(this.currentTime/6000);
  }
  getSeconds() {
    return Math.floor(this.currentTime/100)%60;
  }
  getCentiSecond() {
    return this.currentTime%100;
  }
  twoDigitsNumber(num) {
    if(num<100) {
      return `${Math.floor(num/10)}${num%10}`;
    } else {
      return `99`;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}