class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      printTime();
    }, 1000);
  }

  getMinutes() {
    //let resultado = 0;
    //resultado = (this.currentTime - (this.currentTime % 60)) / 60;
    //resultado = Math.floor(this.currentTime / 60);
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    //return 345;
    return this.currentTime % 60;
  }

  twoDigitsNumber(num) {
    if (num > 9) return "" + num;
    //toString(num)
    return "0" + num;
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    return this.currentTime;
  }
}
