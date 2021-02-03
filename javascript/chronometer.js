class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    setInterval(() => {
      this.currentTime+= 1;
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime - (60 * this.getMinutes())
  }

  twoDigitsNumber(num) {
    if (num < 10) {
      num = '0' + num;
    }

    return num;
  }

  stopClick() {
    clearInterval(this.startClick);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());

    return minutes + ':' + seconds;
  }
}

// let watch = new Chronometer

// console.log(watch.startClick())