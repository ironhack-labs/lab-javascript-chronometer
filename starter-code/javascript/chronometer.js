//Constructor
function Chronometer() {
  this.currentTime = 0;
  this.currentMinutes = 0;
  this.currentSeconds = 0;
  this.currentMilliseconds = 0;
  this.intervalId = 0;

  this.startClick = function(){
    this.intervalId = setInterval(function(){ 
      this.currentTime += 1;
      this.setTime();
    }.bind(this), 10);
  }

  this.setMinutes = function(){
    this.currentMinutes = Math.floor(this.currentTime/6000);
    $("#minUni").html(this.currentMinutes % 10);
    $("#minDec").html(Math.floor(this.currentMinutes / 10))
  }

  this.setSeconds = function(){
    this.currentSeconds = (this.currentTime / 100) % 60;
    this.currentSeconds = Math.floor(this.currentSeconds)
    $("#secUni").html(this.currentSeconds % 10);
    $("#secDec").html(Math.floor(this.currentSeconds / 10));
  }

  this.setMilliseconds = function() {
    this.currentMilliseconds = this.currentTime % 100;
    $("#milUni").html(Math.floor(this.currentMilliseconds % 10));
    $("#milDec").html(Math.floor(this.currentMilliseconds / 10));
  }

  this.twoDigitsNumber = function(number) {
    return number.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  }

  this.setTime = function() {
    this.setMilliseconds();
    this.setSeconds();
    this.setMinutes();
  }

  this.stopTime = function() {
    clearInterval(this.intervalId);
  }

  this.resetClick = function() {
    this.currentTime = 0;
    this.setTime();
    $("#splits").children("*").remove();
  }

  this.splitClick = function() {
    return this.humanReadable(this.currentTime);
  }

  this.humanReadable = function (totalSeconds) {
    return this.twoDigitsNumber(this.currentMinutes) + ":" + this.twoDigitsNumber(this.currentSeconds) + ":" + this.twoDigitsNumber(this.currentMilliseconds);
  }

}