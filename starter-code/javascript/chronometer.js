function Chronometer() {
  this.currentTime = 0;
  this.currentMinutes = 0;
  this.currentSeconds = 0;
  this.currentMilliseconds = 0;
  this.intervalId = 0;
}

Chronometer.prototype = {
  startClick : function() {
    this.intervalId = setInterval(function(){ 
      this.currentTime += 1;
      this.setTime();
    }.bind(this), 10);
  },
  setMilliseconds : function() {
    this.currentMilliseconds = Math.floor(this.currentTime % 100);
    $("#milUni").html(this.getFirstDigit(this.currentMilliseconds));
    $("#milDec").html(this.getSecondDigit(this.currentMilliseconds));
  },
  setSeconds : function(){
    this.currentSeconds = Math.floor((this.currentTime / 100) % 60);
    $("#secUni").html(this.getFirstDigit(this.currentSeconds));
    $("#secDec").html(this.getSecondDigit(this.currentSeconds));
  },
  setMinutes : function(){
    this.currentMinutes = Math.floor(this.currentTime / 6000);
    $("#minUni").html(this.getFirstDigit(this.currentMinutes));
    $("#minDec").html(this.getSecondDigit(this.currentMinutes));
  },
  setTime : function() {
    this.setMilliseconds();
    this.setSeconds();
    this.setMinutes();
  },
  getFirstDigit : function(number) {
    return number % 10;
  },
  getSecondDigit : function(number) {
    return Math.floor(number / 10);
  },
  stopTime : function() {
    clearInterval(this.intervalId);
  },
  resetClick : function() {
    this.currentTime = 0;
    this.setTime();
    $("#splits").children("*").remove();
  },
  splitClick : function() {
    return this.humanReadable(this.currentTime);
  },
  humanReadable : function () {
    return this.getSecondDigit(this.currentMinutes).toString() + this.getFirstDigit(this.currentMinutes).toString() + ":" + this.getSecondDigit(this.currentSeconds).toString() + this.getFirstDigit(this.currentSeconds).toString() + ":" + this.getSecondDigit(this.currentMilliseconds).toString() + this.getFirstDigit(this.currentMilliseconds).toString();
  }
}

var chronometer = new Chronometer();
var btnLeft     = $('#btnLeft');
var btnRight    = $('#btnRight');

$(btnLeft).click(function(){
  if (btnLeft.hasClass(("start"))) {
    chronometer.startClick();
    btnLeft.html("STOP");
    btnRight.html("SPLIT");
    toggleClasses();
  }else if (btnLeft.hasClass("stop")) {
    chronometer.stopTime();
    btnLeft.html("START");
    btnRight.html("RESET");
    toggleClasses();
  }
})
$(btnRight).click(function(){
  if (btnRight.hasClass("split")){
    $("#splits").append(`<li>${chronometer.splitClick()}</li>`);
  }else if (btnRight.hasClass("reset")){
    chronometer.resetClick();
  }
});
function toggleClasses() {
  btnLeft.toggleClass("start");
  btnLeft.toggleClass("stop");
  btnRight.toggleClass("reset");
  btnRight.toggleClass("split");
}