class Chronometer {
  constructor() {
    this.intervalId = 0;
    this.currentTime = 0;
    this.intervalMili = 0;
    this.currentMili = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    }, 1000);
  }

  startMili(callback) {
    this.intervalMili = setInterval(() => {
      this.currentMili++;
      if (callback) {
        callback();
      }
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    let n = this.getMinutes() * 60;
    return this.currentTime - n;
  }

  getCenti() {
    return this.currentMili;
  }

  twoDigitsNumber(num) {
    if (num >= 10 && num < 100) {
      return num.toString();
    } else if (num < 10) {
      let n = num.toString();
      let soma = "0" + n;
      return soma;
    } else {
      let n = num.toString();
      return n.slice(-2);
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalMili);
  }
  resetClick() {
    this.currentTime = 0;
    this.resetMili();
  }

  resetMili() {
    this.currentMili = 0;
  }

  splitClick() {
    let a = this.getMinutes();
    let b = this.getSeconds();
    let c = this.getCenti();
    let as = this.twoDigitsNumber(a);
    let bs = this.twoDigitsNumber(b);
    let cs = this.twoDigitsNumber(c);
    return `${as}:${bs}:${cs}`;
  }
}
