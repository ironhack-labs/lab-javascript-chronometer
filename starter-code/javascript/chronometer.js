// Constructor
var sec =0;
var min = 0;
var time = "";

function Chronometer() {
  this.currentTime = 0;
  this.intervalId = "";

     
  this.setMinutes = function () {
    min++;
    this.twoDigitsNumber();
    
  }

  this.setSeconds = function () {
  sec++;
  if (sec > 59) {
    sec = 0;
    this.setMinutes();
    this.twoDigitsNumber();
    }
  }
  
  this.twoDigitsNumber = function () {
    this.currentTime = ((min < 10) ? ("0" + min) : min) + ":" + ( (sec < 10) ? ("0" + sec) : sec ) ;
    printSeconds();
  };

  this.setTime = function () {
    console.log(time);
  };

  this.resetClick = function () {
    this.currentTime = 0;
    sec = 0;
    min = 0;
    this.twoDigitsNumber();
  };

  this.splitClick = function () {
    this.twoDigitsNumber();
  };

  this.startClick = function () {
    chronometer.intervalId = setInterval(function(){
    chronometer.setSeconds();
    chronometer.twoDigitsNumber();
    }, 100);
  };

  this.stopClick = function () {
      clearInterval(chronometer.intervalId);
    };
}


  // Chronometer.prototype.setMilliseconds = function () {

// };

