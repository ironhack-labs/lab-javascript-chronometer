function Chronometer() {
  this.currentTime = 0;
  this.currentMinutes = 0;
  this.currentSeconds = 0;
  this.currentMilliseconds = 0;
  this.intervalId = 0;
  this.btnLeft = $('#btnLeft');
  this.btnRight = $('#btnRight');
}

Chronometer.prototype = {
  startClick : function() {
    this.intervalId = setInterval(function(){ 
      this.currentTime += 1;
      this.setTime();
    }.bind(this), 10);
    this.btnLeft.html("STOP");
    this.btnRight.html("SPLIT");
    this.toggleClasses();
  },
  stopTime : function() {
    clearInterval(this.intervalId);
    this.btnLeft.html("START");
    this.btnRight.html("RESET");
    this.toggleClasses();
  },
  setMilliseconds : function() {
    this.currentMilliseconds = this.currentTime % 100;
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
  resetClick : function() {
    this.currentTime = 0;
    this.setTime();
    $("#splits").children("*").remove();
  },
  splitClick : function() {
    $("#splits").append(`<li>${this.humanReadable(this.currentTime)}</li>`);
  },
  humanReadable : function () {
    return this.getSecondDigit(this.currentMinutes).toString() + this.getFirstDigit(this.currentMinutes).toString() + ":" + this.getSecondDigit(this.currentSeconds).toString() + this.getFirstDigit(this.currentSeconds).toString() + ":" + this.getSecondDigit(this.currentMilliseconds).toString() + this.getFirstDigit(this.currentMilliseconds).toString();
  },
  toggleClasses : function () {
    this.btnLeft.toggleClass("start");
    this.btnLeft.toggleClass("stop");
    this.btnRight.toggleClass("reset");
    this.btnRight.toggleClass("split");
  }
}

var chronometer = new Chronometer();

$(chronometer.btnLeft).click(function(){
  if (chronometer.btnLeft.hasClass(("start"))) {
    chronometer.startClick();
  }else if (chronometer.btnLeft.hasClass("stop")) {
    chronometer.stopTime();
  }
})
$(chronometer.btnRight).click(function(){
  if (chronometer.btnRight.hasClass("split")){
    chronometer.splitClick();
  }else if (chronometer.btnRight.hasClass("reset")){
    chronometer.resetClick();
  }
});