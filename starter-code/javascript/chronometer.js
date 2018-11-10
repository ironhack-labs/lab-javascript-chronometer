// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(function(){
    this.currentTime++;
    this.setTime();
 }.bind(this),1000);
};

Chronometer.prototype.setMinutes = function () {
  return this.currentTime = Math.floor(this.currentTime/60);
};

Chronometer.prototype.setSeconds = function () {
    return this.currentTime%60;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  // var minutes = this.setMinutes();
  // var seconds = this.setSeconds();

  if(number.toString().length<2){
    return "0" + number.toString();
  } else{
    return number.toString();
  }

  // if(seconds.toString().length<2){
  //   return "0" + seconds.toString();
  // }else{
  //   return seconds.toString();
  // }
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());
  return minutes + seconds;
  // return this.setMinutes() + this.setSeconds();
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.startClick());
};

Chronometer.prototype.resetClick = function () {
 return this.currentTime = 0 ;
};

// Chronometer.prototype.splitClick = function () {

// };
