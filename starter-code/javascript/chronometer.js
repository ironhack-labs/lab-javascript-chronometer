class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // this.splitList = [];
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 100);
  }
  getMinutes() {
    // if (!this.currentTime) aşağıdakiyle aynı
    if (this.currentTime === 0) {
      return 0;
    }
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    if (!this.currentTime) return 0;
    let minutes = this.getMinutes();
    let seconds = this.currentTime;
    return seconds - minutes * 60;
  }
  getMilliseconds() {
    if (!this.currentTime) return 0;
    let seconds = this.getSeconds();
    let miliseconds = this.currentTime;
    return miliseconds - seconds * ;
  }

  twoDigitsNumber(val) {
    if (val < 10) {
      return "0" + val;
    } else {
      return val + "";
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
    this.splitList = [];
  }
  splitClick(minutes, seconds) {
    let minutesToString = this.twoDigitsNumber(minutes);
    let secondsToString = this.twoDigitsNumber(seconds);
    return `${minutesToString} : ${secondsToString}`;
    // this.splitList.push({
    //   minutes: this.getMinutes(),
    //   seconds: this.getSeconds()
    // });
  }
}
