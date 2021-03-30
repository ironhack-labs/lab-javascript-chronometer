class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    console.log("hola");

    this.intervalId = setInterval(() => {
      console.log("hola");
      console.log(this.currentTime);
      this.currentTime++;
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }
  twoDigitsNumber(time) {
    if (time < 10) {
      return `0` + time;
    } else {
      return String(time);
    }
  }
  stopClick() {
    return clearInterval(this.intervalId);
  }
  resetClick() {
    return (this.currentTime = 0);
  }
  splitClick() {
    let minuts = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    return `${minuts}:${seconds}`;
  }
}
