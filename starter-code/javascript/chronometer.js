class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    this.intervalId = setInterval( () => { 
      this.currentTime += 1;
    }, 1000)
  }

  // return total minutes that respond to current time
  getMinutes() {
    var totalMinutes = 0;
    totalMinutes += Math.floor(this.currentTime/60);
    return totalMinutes;
  }

  // total seconds remaining less total minutes
  getSeconds() {
    var currentSeconds = 0;
    currentSeconds += (this.currentTime % 60);
    return currentSeconds;
  }

  // return any number with two digits
  twoDigitsNumber(anyNumber) {
    var twoDigits = ("0" + anyNumber).slice(-2);
    return twoDigits;
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds());
  }
}
