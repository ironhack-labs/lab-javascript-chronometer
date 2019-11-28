class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  startClick() {
    this.intervalId = setInterval(function() {
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    //60 seconds in 1 minute
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    //Gives us remainder of seconds
    return Math.floor(this.currentTime % 60);
  }
  twoDigitsNumber(value) {
    return ("0" + value).slice(-2);
  }
  stopClick() {
    return (this.intervalId = 0);
  }
  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}
