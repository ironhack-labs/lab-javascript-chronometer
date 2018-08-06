// Constructor
function Chronometer() {
  this.currentTime = 0,
  this.intervalId = 0
}

Chronometer.prototype.startClick = function () {
    var that = this;
    this.intervalId = setInterval(function(){
      that.currentTime++;
      that.setTime();
    }, 10);
};

Chronometer.prototype.setMinutes = function () {
  return parseInt(((this.currentTime)/(100*60))%60);
};

Chronometer.prototype.setSeconds = function () {
  return parseInt((this.currentTime/100)%60);
};

Chronometer.prototype.setMilliseconds = function () {
  return this.currentTime;
};

Chronometer.prototype.twoDigitsMili = function(m){
  var string = "";
  m = m%100;
  if ( m < 10){
    string += "0"+m;
    return string;
  }
  else{
    string += parseInt(m);
    return string.slice(-2);
  }
};

Chronometer.prototype.twoDigitsNumber = function (n) {
  var string = "";
  if (n < 10 ){
    string += "0"+n;
    return string;
  }
  else{
    string += n;
    return string;
  }
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds());
  var miliseconds = this.twoDigitsMili(this.currentTime);
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
};
