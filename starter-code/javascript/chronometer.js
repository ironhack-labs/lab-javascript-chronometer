class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.currentTimeMilli = 0;
    this.intervalId = "";
  }

  startClick() {
    this.intervalId = setInterval(() => {
      console.log(this, "this is this");
      this.currentTime += 1;
      console.log(this.currentTime);
    }, 1000);
    this.intervalId2 = setInterval(() => {
      this.currentTimeMilli += 1;
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getMilliseconds() {
    return this.currentTimeMilli % 100;
  }

  twoDigitsNumber(string) {
    var str = String(string);
    if (str.length == 2) {
      return str;
    } else if (str.length == 1) {
      return "0" + str;
    } else {
      return "00";
    }
  }

  stopClick() {
    return clearInterval(this.intervalId);
  }


  stopClickMilli() {
    return clearInterval(this.intervalId2);
  }

  resetClick() {
    this.currentTime = 0;
    this.currentTimeMilli = 0;
  }
  // splitClick() {}
}
