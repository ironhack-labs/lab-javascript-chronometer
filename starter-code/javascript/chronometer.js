class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  increment() {
    this.currentTime ++;
    // update clock face
    printTime();
  }
  startClick() {
    this.intervalId = setInterval(this.increment.bind(this), 10);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 6000)
  }
  getSeconds() {
    return Math.floor((this.currentTime % 6000) / 100);
  }
  getDeciSeconds() {
    return this.currentTime % 100;
  }
  twoDigitsNumber(num) {
    if (num < 10) return "0" + num;
    return num.toString();
  }
  stopClick() {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }
  resetClick() {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
    this.currentTime = 0;
    // update clock face
    printTime();
  }
  splitClick() {
    let elem = document.createElement("li");
    elem.innerText = this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds()) + ":" + this.twoDigitsNumber(this.getDeciSeconds());
    return elem;
  }
}