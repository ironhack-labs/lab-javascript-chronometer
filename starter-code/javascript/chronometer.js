class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      // console.log(this.currentTime)
      printMinutes()
      printSeconds()
    }, 1000);

  }

  getMinutes() {
    let segToMinutes = this.currentTime / 60;
    // console.log(parseFloat(segToMinutes));
    return parseInt(segToMinutes);
  }
  getSeconds() {
    let getSeconds = this.currentTime % 60;
    return getSeconds;
  }
  twoDigitsNumber(currentTime) {
    if (currentTime < 10) {
      console.log("0" + currentTime);
      return "0" + currentTime;
    } else {
      console.log(currentTime);
      return `${currentTime}`;
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}