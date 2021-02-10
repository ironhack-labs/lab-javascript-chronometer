class Chronometer {
  constructor() {
    this.currentTime= 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      callback();
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
    if (num < 10) {
      return "0"+num.toString();
    } else {
      return num.toString();
    }
  }
  stopClick() {
    clearInterval(this.intervalId)
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