class Chronometer {
    constructor() {
      this.currentTime = 0;
      this.intervalId = 0;

    }
  startClick() {
    this.intervalId = setInterval(()=> {
      this.currentTime+= 1;
      this.setTime();
    }, 1000);
  }

  setMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  setSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(n) {
    n = n.toString();
    if (n.length < 2) n = '0' + n;
    return n;
  }

  setTime() {
    const minutes = this.twoDigitsNumber(this.setMinutes());
    const seconds = this.twoDigitsNumber(this.setSeconds());
  }

  setMilliseconds() {

  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {

  }
}

