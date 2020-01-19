class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    this.intervalId = setInterval(
      function() {
        console.log("second");
        this.currentTime += 1;
        printTime(this.getMinutes(), this.getSeconds(), this.getMilliseconds());
      }.bind(this),
      10
    );
  }

  getMinutes() {
    return this.twoDigitsNumber(parseInt(this.currentTime / 100 / 60));
  }

  getSeconds() {
    return this.twoDigitsNumber(parseInt((this.currentTime / 100) % 60));
  }

  getMilliseconds() {
    let timeString = this.currentTime.toString();
    let milliseconds = [];
    for (let i = timeString.length - 1; i >= timeString.length - 2; i--) {
      milliseconds.unshift(timeString[i]);
    }
    return this.twoDigitsNumber(parseInt(milliseconds.join("")));
  }

  twoDigitsNumber(number) {
    if (number.toString().length === 2) {
      return number.toString();
    }
    return "0" + number.toString();
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  // splitClick() {}
}
