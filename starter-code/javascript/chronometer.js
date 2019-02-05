//Constructor
function Chronometer() {
  this.currentTime = 0;
  this.currentMinutes = 0;
  this.currentSeconds = 0;
  this.intervalId = 0;
//  this.intervalId = 0;

  this.startClick = function(){
    this.intervalID = setInterval(function(){ 
      this.currentTime += 1;
      this.setTime();
      this.callIt();
    }.bind(this), 10);
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
  }

  this.callIt = function(){
    console.log("minutes:" + this.currentMinutes + " seconds:" + this.currentSeconds);
  }
}

var chrono = new Chronometer();

$("#btnRight").click(function(){
  chrono.resetClick();
});


$("#btnLeft").click(function(){
  chrono.startClick();
})


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
