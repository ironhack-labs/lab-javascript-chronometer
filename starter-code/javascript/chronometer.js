class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(a) {
    let digits = String(a);
    if (digits.length === 1) {
      return "0" + digits;
    } else if (digits.length === 2) {
      return digits;
    }
    return;
  }

  stopClick() {
    window.clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    var a = this.twoDigitsNumber(this.getMinutes());
    var b = this.twoDigitsNumber(this.getSeconds());
    return `${a}:${b}`;
  }
} //
