function Cronometer() {
  this.minDec = 0;
  this.tminCen = 0;
  this.secDec = 0;
  this.secCen = 0;
};

Cronometer.prototype.starClick = function() {

  var classLeft = document.getElementById("btnLeft");
  classLeft.className = "btn stop";
  classLeft.innerHTML = "STOP";

  var classRight = document.getElementById("btnRight");
  classRight.className = "btn split";
  classRight.innerHTML = "SPLIT";
};

Cronometer.prototype.stopClick= function(){
  var classLeft = document.getElementById("btnLeft");
  classLeft.className = "btn start";
  classLeft.innerHTML = "START";

  var classRight = document.getElementById("btnRight");
  classRight.className = "btn retest";
  classRight.innerHTML = "RESET";
};
