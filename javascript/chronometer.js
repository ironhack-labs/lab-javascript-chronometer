class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => this.currentTime++, 1000);
  }

  getMinutes() {
    return Math.trunc(this.currentTime / 60);
  }

  getSeconds() {
    return Number(this.currentTime % 60);
  }

  twoDigitsNumber(value) {
    if (!isNaN(value)) {
      if (value.length === 1) {
        value = "0" + value;
        return value;
      }
    } else {
      console.log("This is not a number");
    }
    return "00";
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    var result = "";
    result += this.twoDigitsNumber(this.getMinutes());
    result += ":";
    result += this.twoDigitsNumber(this.getSeconds());
  
    return result;
  }
}
