class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  isRunning() {
    return this.intervalId !== null;
  }

  startClick(callback) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        callback({
          "min" : this.twoDigitsNumber(this.getMinutes()),
          "sec" : this.twoDigitsNumber(this.getSeconds())
        });
      }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(num) {
    return String(num).length > 1 ? num.toString() : ("0" + num);
  }

  fullTime() {
    return this.twoDigitsNumber(this.getMinutes()) +
           ':' +
           this.twoDigitsNumber(this.getSeconds());
  }

  resetClick() {
    this.stopClick();
    this.currentTime = 0;
  }

  stopClick() {
    if (this.intervalId !== null ) {
      clearInterval(this.intervalId)
      this.intervalId = null;
    }
  }
  
}
