class Chronometer {
  constructor() {
    this.currentTimeMiliSeconds = 0;
    this.currentTime = 0;
    this.intervalId = 0;
    this.intervalMiliSeconds = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTimeMiliSeconds += 1;
      this.currentTime = Math.floor(this.currentTimeMiliSeconds / 100);
      callback();
    }, 10);
  }
  // startMiliSeconds(callback) {
  //   this.intervalMiliSeconds = setInterval(() => {
  //     this.currentTimeMiliSeconds += 1;
  //     callback();
  //   }, 10);
  // }
  getMilisenconds() {
    return Math.floor(this.currentTimeMiliSeconds % 100);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }
  twoDigitsNumber(number) {
    if (number < 10) {
      return "0" + number.toString();
    } else {
      return number.toString();
    }
  }
  stopClick() {
    return clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTimeMiliSeconds = 0;
    this.currentTime = 0;
    return this.currentTimeMiliSeconds, this.currentTime;
  }
  splitClick() {
    return (
      this.twoDigitsNumber(this.getMinutes(this.currentTime)) +
      ":" +
      this.twoDigitsNumber(this.getSeconds(this.currentTime)) +
      ":" +
      this.twoDigitsNumber(this.getMilisenconds(this.currentTimeMiliSeconds))
    );
  }
}
