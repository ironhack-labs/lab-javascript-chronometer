// Constructor

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  //   startClick() {
  //     this.insertvalID = setInterval(() => {
  //       this.currentTime++;
  //     }, 100);
  //   }

  startClick() {
    this.intervalId = setInterval(
      function() {  
        this.currentTime++;
        this.setTime();
      }.bind(this),
      1000
    );
  }

  setMinutes() {
    var minutes = 0;
    if (this.currentTime > 60) {
      minutes = this.currentTime / 60;
    } else {
      return 0;
    }

    return parseInt(minutes);
  }

  setSeconds() {
    var seconds = 0;

    if (this.currentTime < 60) {
      seconds = this.currentTime;
    } else {
      seconds = this.currentTime % 60;
    }

    return seconds;
  }

  twoDigitsNumber(parameter) {
    if (parameter === 0) {
      return "00";
    } else if (parameter > 9) {
        return ""+parameter;
    } else {
      return "0"+parameter;
    }
  }

  setTime(){
    var seconds = this.setSeconds();
    var minutes = this.setMinutes();

    if(seconds.length<2){
        seconds = this.twoDigitsNumber(seconds);
    }

    if(minutes.length<2){
        minutes = this.twoDigitsNumber(minutes);
    }
  }

  stopClick(){
      window.clearInterval(this.intervalId);
  }

  resetClick(){
    this.currentTime = 0;
  }
}

// Chronometer.prototype.setMinutes = function () {

// };

// Chronometer.prototype.setSeconds = function () {

// };

// Chronometer.prototype.twoDigitsNumber = function () {

// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {

// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
