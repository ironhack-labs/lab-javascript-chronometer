class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  startClick() {
    this.intervalId = setInterval(
      function() {
        this.currentTime++;
      }.bind(this),
      1000
    );
  }

  getMinutes() {
    //60 seconds in 1 minute
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    //Gives us remainder of seconds when number is smaller or greater than 60
    return Math.floor(this.currentTime % 60);
  }
  twoDigitsNumber(value) {
    if (value < 10) {
      return "0" + value;
    }
    return value.toString();
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {} ???
}
