class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  startClick() {
    const intervalId = setInterval(() => {
      // console.log(this.currentTime);
      this.currentTime++;
      printTime();
      console.log(this.currentTime);
    }, 1000);
    this.intervalId = intervalId;
    console.log(intervalId);
  }

  getMinutes() {
    return parseInt(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(n) {
    if (n < 10) {
      n = n.toString().padStart(2, "0");
    } else {
      n = n.toString();
    }
    return n;
    //return n > 9 ? "" + n : "0" + n;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}
/* const buttonStop = document
  .getElementsByClassName("btn start")
buttonStop.onclick.clearInterval(intervalId); */
