class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = 0
  }
  
  startClick() {
    setInterval(function() {
      this.currentTime ++;
    }.bind(this),1000)
  }
  // getMinutes() {}
  // getSeconds() {}
  // twoDigitsNumber() {}
  // stopClick() {}
  // resetClick() {}
  // splitClick() {}
}