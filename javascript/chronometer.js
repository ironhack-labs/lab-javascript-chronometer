class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalID = setInterval(() => {
      this.currentTime += 1;
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }
  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60;
  }
  getMilliseconds() {
    return this.currentTime % 100;
  }
  twoDigitsNumber(someNumber) {
    let strnum = someNumber.toString();
    if (strnum.length === 1) {
      return "0" + strnum;
    } else {
      return strnum;
    }
  }
  dec(someNumber) {
    let strnum1 = someNumber.toString();
    return strnum1[0];
  }
  uni(someNumber) {
    let strnum2 = someNumber.toString();
    return strnum2[1];
  }

  stopClick() {
    clearInterval(this.intervalID);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    const min = this.twoDigitsNumber(this.getMinutes());
    const sec = this.twoDigitsNumber(this.getSeconds());
    const mil = this.twoDigitsNumber(this.getMilliseconds());
    return `${min}:${sec}:${mil}`;
  }
}
