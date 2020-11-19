class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      console.log("ok");
      this.currentTime += 1;
      //callback();
    }, 1000);
  }
  getMinutes() {
    return Math.trunc(this.currentTime / 60);
  }
  getSeconds() {
    let minutes = this.getMinutes();
    let seconds = minutes * 60;
    return this.currentTime - seconds;
  }
  twoDigitsNumber(number) {
    return number < 10 ? "0" + number : number.toString();
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    return (this.currentTime = 0);
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());

    console.log(min);

    return `${min}:${sec}`;
  }
}
