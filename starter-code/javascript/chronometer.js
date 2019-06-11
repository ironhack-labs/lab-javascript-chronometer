class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    
  }


  getSeconds() {}
  twoDigitsNumber() {}
  stopClick() {}
  resetClick() {}
  splitClick() {}
}
