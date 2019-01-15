// Constructor
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    var that = this;
    this.intervalId = setInterval(function() {
      that.currentTime++;
      that.setTime();
      console.log("hi")
    }, 1000);
  }

  setMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  setSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(n) {
    n = n.toString();
    if (n.length < 2) {
      n = "0" + n;
    }
    return n;
  }

  setTime() {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());
    return (minutes + seconds).split("")
  }
  stopClick () {
    clearInterval(this.intervalId)
    console.log("Stopped")
  }
  resetClick() {
    this.currentTime = 0
    return this.currentTime
  }
  
}




// Chronometer.prototype.splitClick = function () {

// };
