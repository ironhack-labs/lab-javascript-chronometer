let startInterval;

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    startInterval = setInterval(() => {
      this.currentTime += 1;
      this.intervalId = this.currentTime;
      console.log(this.currentTime);
    }, 1000);
  }

  getMinutes() {
    return parseInt(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(par) {
    if (par < 10) {
      par = par.toString().padStart(2, "0");
    } else {
      par = par.toString();
    }
    return par;
  }

  stopClick() {
    clearInterval(startInterval);
  }

  resetClick() {
    this.currentTime = 0;
  }

  // splitClick() {}
}
