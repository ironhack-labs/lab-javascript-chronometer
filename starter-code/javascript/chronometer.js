class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = "";
  }
  startClick() {
    this.intervalId = setInterval(() => {
      console.log(this.currentTime++);
    }, 1000);
    return this.currentTime;
  }

  getMinutes() {
    if (this.currentTime < 60) {
      return 0;
    } else {
      let min = Math.floor(this.currentTime / 60);
      return min;
    }
  }

  getSeconds() {
    if (this.currentTime % 60 === 0) {
      return 0;
    } else {
      let sec = this.currentTime % 60;
      return sec;
    }
  }

  twoDigitsNumber(n) {
    return ("0" + n).slice(-2);
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    return (this.currentTime = 0);
  }

  splitClick() {
    let minToString = this.twoDigitsNumber(this.getMinutes());
    let secToString = this.twoDigitsNumber(this.getSeconds());
    return `${minToString}:${secToString}`;
  }
}
