class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.milliseconds = 0;
    this.intervalId = null;
  }

  isRunning() {
    return this.intervalId !== null;
  }

  startClick(callback) {
      this.intervalId = setInterval(() => {

        // Increment ms 10 by 10
        this.milliseconds += 10;

        // Each second, add 1 to current time
        this.currentTime += Math.floor(this.milliseconds / 1000);

        // Each second, set the ms back to 0 so it doesnt run of
        if (this.milliseconds >= 1000) { this.milliseconds = 0 }

        callback({
          "min" : this.twoDigitsNumber(this.getMinutes()),
          "sec" : this.twoDigitsNumber(this.getSeconds()),
          "milli" : this.twoDigitsNumber(this.getMilliSeconds())
        });

      }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getMilliSeconds() {
    return parseInt(this.milliseconds.toString().substring(0,2), 10);
  }

  twoDigitsNumber(num) {
    return String(num).length > 1 ? num.toString() : ("0" + num);
  }

  fullTime() {
    return this.twoDigitsNumber(this.getMinutes()) +
           ':' +
           this.twoDigitsNumber(this.getSeconds()) +
           ':' +
           this.twoDigitsNumber(this.getMilliSeconds());
  }

  resetClick() {
    this.stopClick();
    this.currentTime = 0;
    this.milliseconds = 0;
  }

  stopClick() {
    if (this.intervalId !== null ) {
      clearInterval(this.intervalId)
      this.intervalId = null;
    }
  }

}
