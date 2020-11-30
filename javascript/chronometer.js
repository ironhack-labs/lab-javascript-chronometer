class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(() => {
      this.currentTime++;
    }, 1000)
  }
  getMinutes() {
    return Math.trunc(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime - this.getMinutes() * 60
  }
 
  twoDigitsNumber(value) {
    if (value.toString().length === 1) {
      return `0${value}`
    } else {
      return `${value}`
    }
  }
  stopClick() {
    this.intervalId = 0;
    return clearInterval();
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}

 // twoDigitsNumber() {
  //   if (this.getMinutes().toString().length === 1) {
  //     return `0${this.getMinutes().toString()}`
  //   } else {
  //     return `${this.getMinutes().toString()}`
  //   }
  // }