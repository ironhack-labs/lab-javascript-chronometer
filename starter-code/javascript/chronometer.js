class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(crazyClock) {
    let crazyP = crazyClock.toString();
    if (crazyP.length <= 1) {
      return (crazyP = 0 + crazyP);
    }
    return crazyP;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime == 0;
  }
  // splitClick() {}
}
