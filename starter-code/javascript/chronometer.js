class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  
  // startClick() {}
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      printSeconds();
    }, 1000);
  }

  // getMinutes() {}
  // getSeconds() {}
  // twoDigitsNumber() {}
  // stopClick() {}
  // resetClick() {}
  // splitClick() {}
}