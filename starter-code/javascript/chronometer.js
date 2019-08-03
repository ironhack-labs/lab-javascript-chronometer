class Chronometer {
  constructor(printMinutes) {
    this.currentTime = 0;
    this.intervalId = null;
    this.printMinutes = printMinutes;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      this.printMinutes(this.getMinutes());
    }, 50);
  }

  getMinutes() {
    debugger;
    let minut = Math.floor(this.currentTime / 60);

    if (minut < 10) {
      return `0${minut}`;
    }
    return `${minut}`;
  }

  getSeconds() {
    const mins = this.getMinutes();
    return this.currentTime - mins * 60;
  }

  // twoDigitsNumber() {}
  // stopClick() {}
  // resetClick() {}
  // splitClick() {}
}
