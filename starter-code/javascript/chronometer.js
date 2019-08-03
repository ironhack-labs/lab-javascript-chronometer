class Chronometer {
  constructor(printTime) {
    this.currentTime = 0;
    this.intervalId = null;
    this.printTime = printTime;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      this.printTime(
        this.getDeciSeconds(),
        this.getSeconds(),
        this.getMinutes()
      );
    }, 10);
  }

  getMinutes() {
    let minut = Math.floor(this.currentTime / 6000);

    return this.twoDigitsNumber(minut);
  }

  getSeconds() {
    let sec = Math.floor((this.currentTime - this.getMinutes() * 6000) / 100);
    return this.twoDigitsNumber(sec);
  }

  getDeciSeconds() {
    let deci =
      this.currentTime - this.getMinutes() * 6000 - this.getSeconds() * 100;
    return this.twoDigitsNumber(deci);
  }

  twoDigitsNumber(time) {
    if (time < 10) {
      return `0${time}`;
    }

    return `${time}`;
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    clearInterval(this.intervalId);
    this.currentTime = 0;
  }
  // splitClick() {}
}
