//Constructor
function Chronometer() {
  this.currentTime = 0;
  this.currentMinutes = 0;
  this.currentSeconds = 0;
  this.intervalId = 0;

  this.startClick = function(){
    this.intervalId = setInterval(function(){ 
      this.currentTime += 1;
      this.setTime();
      this.callIt();
    }.bind(this), 100);
  }

  this.setMinutes = function(){
    this.currentMinutes = Math.floor(this.currentTime/60);
    $("#minUni").html(this.currentMinutes % 10);
    $("#minDec").html(Math.floor(this.currentMinutes / 10))
  }

  this.setSeconds = function(){
    this.currentSeconds = this.currentTime % 60;
    if (this.currentSeconds === 60) this.currentSeconds = 0;
    console.log(this.currentSeconds); 
    $("#secUni").html(this.currentSeconds % 10);
    $("#secDec").html(Math.floor(this.currentSeconds / 10))
  }

  this.twoDigitsNumber = function(number) {
    return number.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  }

  this.setTime = function() {
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
    return  this.humanReadable(this.currentTime);
  }

  // from codewars exercise :)
  this.humanReadable = function (totalSeconds) {
    var seconds = 00;
    var minutes = 00;
    if(totalSeconds < 60 && totalSeconds > 0){
      seconds = totalSeconds;
    }else if (totalSeconds < 3600){
      seconds = totalSeconds % 60;
      minutes = Math.floor(totalSeconds/60);
    }
    return this.twoDigitsNumber(minutes) + ":" + this.twoDigitsNumber(seconds)
  }

  this.callIt = function(){
    console.log("minutes:" + this.currentMinutes + " seconds:" + this.currentSeconds);
  }
}




// Chronometer.prototype.setMilliseconds = function () {

// };