class Chronometer {
  constructor() {
    this.currentTime= 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000);
    console.log(this.intervalId);
  }
  getMinutes() {
    return (Math.floor(this.currentTime/60))
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(num) {
    if (num.length !== 2) {
      return "0"+num;
    }
  }
  stopClick() {
    clearInterval(this.startClick)
  }
  resetClick() {
    this.currentTime=0
  }
  splitClick() {
    let result =
      this.twoDigitsNumber(this.getMinutes()) +
      ":" +
      this.twoDigitsNumber(this.getSeconds());
    return result;
  }
}