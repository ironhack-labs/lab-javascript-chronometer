class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;

  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback()
      };
    }, 1000);
    return this.currentTime;
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60); //=> minute
  }

  getSeconds() {
    return this.currentTime % 60; // ==> second
  }

  twoDigitsNumber(toto) {
    if (toto < 10) {
      toto = "0" + toto;
    }
    return toto.toString()
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    return this.currentTime = 0;
  }

  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`;
  }
} 