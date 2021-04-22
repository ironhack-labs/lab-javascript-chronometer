export default class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    //counter starts at 0
    //we start the counter with the setInterval
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      console.log(this.currentTime);
      callback();
    }, 1000);
  }
  getMinutes() {
  return (Math.floor(this.currentTime/60));
  }
  getSeconds() {
  return (Math.floor(this.currentTime%60));
  }
  twoDigitsNumber(number) {
  if (number>=10) {
    return String(number);
  } else {
    return "0"+number;
  }
  }
  stopClick() {
  clearInterval(this.intervalId);
  }
  resetClick() {
  return this.currentTime=0;
  }
  splitClick() {
    let minutes=this.twoDigitsNumber(this.getMinutes());
    let seconds=this.twoDigitsNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}
