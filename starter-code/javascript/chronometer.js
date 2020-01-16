class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalID = 0;
  }
  startClick(clbk) {
    this.intervalID = setInterval(() => {
      this.currentTime++;
      clbk();
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(number) {
    if (number < 10) {
      return "0" + number;
    }
    return number.toString();
  }
  stopClick() {
    clearInterval(this.intervalID);
  }
  resetClick(clbk, target) {
    this.currentTime = 0;
    target.innerHTML = ``;
    clbk();
  }
  splitClick(clbk) {
    //console.log('help')
    clbk();
  }
}