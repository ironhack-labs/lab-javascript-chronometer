//  Constructor
function Chronometer() {
  this.currentTime = 0; 
  this.intervalId = 0; 
}

var chronometer = new Chronometer();


Chronometer.prototype.startClick = function () {
  var that = this;
  this.currentTime = setInterval(function(){
    console.log(that.currentTime);
    that.currentTime++;
    if (that.currentTime === 60) {
      that.currentTime = 0;
    }
    chronometer.setTime(that.currentTime);
  }, 1000);
};

chronometer.startClick();

Chronometer.prototype.setMinutes = function () {
  var that = this;
  this.intervalId = setInterval(function() {
    console.log('Minutos: ' + (that.intervalId -1));
    return that.intervalId++ -1;
  }, 60000);
};

chronometer.setMinutes();

Chronometer.prototype.setSeconds = function () {
  var that = this;
  this.currentTime = setInterval(function(){
  console.log(that.currentTime);
  that.currentTime++;
  if (that.currentTime === 60) {
  that.currentTime = 0;
} return that.currentTime;
  }, 1000);
};

Chronometer.prototype.twoDigitsNumber = function (twoDigitsNumber) {
  if(twoDigitsNumber < 10) {
    return ('0' + twoDigitsNumber);
  } else {
    return twoDigitsNumber;
  }
};

var seconds = 0, minutes = 0;

Chronometer.prototype.setTime = function (e) {
  if(e === 60) { this.minutes++; };
  return (twoDigitsNumber(this.minutes) + ' : ' + twoDigitsNumber(this.e));
};

Chronometer.prototype.stopClick = function () {
  clearInterval(startClick);
};

// Chronometer.prototype.setMilliseconds = function () {

// };


Chronometer.prototype.resetClick = function () {
  chronometer.startClick();
};

// Chronometer.prototype.splitClick = function () {

// };
