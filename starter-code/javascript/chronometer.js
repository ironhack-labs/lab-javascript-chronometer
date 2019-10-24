class Chronometer {

  constructor() {
    this.currentTime = 0;
  }


  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      console.log(this.currentTime);
    }, 1000)

  }


  getMinutes() {
    let minute = this.currentTime / 60
    return Math.floor(minute)
  }
  getSeconds() {
    return this.currentTime % 60;

  }
  twoDigitsNumber(a) {
    return `${a}`.length > 1 ? `${a}` : "0" + a
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {

  }

  splitClick() { }
}
