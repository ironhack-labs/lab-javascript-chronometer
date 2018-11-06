// Constructor
function Chronometer() {
  this.currentTime = 0
  this.intervalId = 0
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(()=>{
  this.currentTime++
  this.setTime()
  },1000)
 };

Chronometer.prototype.setMinutes = function () {
  return parseInt(this.currentTime/60)
};

Chronometer.prototype.setSeconds = function () {
  return  parseInt(this.currentTime%60)
};

Chronometer.prototype.twoDigitsNumber = function(value) {  
  if(value < 10) return ('0'+value).slice(-2)
    return   value.toString()
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber (this.setMinutes())
  var seconds = this.twoDigitsNumber( this.setSeconds())  
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval( this.intervalId )
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0
};

// Chronometer.prototype.splitClick = function () {

// };
