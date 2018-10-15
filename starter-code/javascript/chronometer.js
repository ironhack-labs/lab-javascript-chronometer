// Constructor

class Chronometer {
  constructor () {
   this.currentTime = 0;
    this.intervalId = 0;
  
  }
startClick() {
  this.intervalId = setInterval(() => { 
    this.currentTime += 1;
    return this.setTime()
  },1000)
}

setMinutes() {
return parseInt(this.currentTime / 60)

}


setSeconds(){
  return this.currentTime % 60
}
twoDigitsNumber(value) {
if (value < 10) {
  return ("0" + value)
}
else return value.toString()
}

setTime() {
  var minutes = this.twoDigitsNumber(this.setMinutes())
  var seconds = this.twoDigitsNumber(this.setSeconds())
  
  return [minutes,seconds];
}
stopClick() {
  clearInterval(this.intervalId)
}

resetClick() {
  this.currentTime = 0
}

}

// function Chronometer() {

// }

// Chronometer.prototype.startClick = function () {

// };

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
