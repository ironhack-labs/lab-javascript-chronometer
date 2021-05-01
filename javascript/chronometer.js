class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.currentTime;
    const callbackFn = () => {
      this.currentTime += 1;
    };
    let intervalId = setInterval(callbackFn, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber() {
    return this.currentTime.toString().padStart(2, "0");
  }
  stopClick() {
    return clearInterval(this.intervalId);
  }
  resetClick() {
    return (this.currentTime = 0);
  }
  splitClick() {
    return (
      this.twoDigitsNumber(this.getMinutes(this.currentTime)) +
      ":" +
      this.twoDigitsNumber(this.getSeconds(this.currentTime))
    );
  }
}
