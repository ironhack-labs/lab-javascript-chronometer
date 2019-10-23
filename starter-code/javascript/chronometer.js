class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = "";
  }

  startClick() {
    this.intervalId = setInterval(() => {
      console.log(this, "this is this");
      this.currentTime += 1;
      console.log(this.currentTime);
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
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

  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}
