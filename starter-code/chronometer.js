function Cronometer() {
  this.minDec = 0;
  this.minCen = 0;
  this.secDec = 0;
  this.secCen = 0;
  this.status = 0;
};

Cronometer.prototype.starClick = function() {
  this.changeLeftButton();
  this.changeRightButton();
  var that = this;
  this.status = setInterval(function(){
    that.secCen++;

    if (that.secCen > 9) {
      that.secDec++;
      that.secCen = 0;
    }
    if (that.secDec >= 6) {
      that.minCen++;
      that.secDec = 0;
    }
    if (that.minCen > 9) {
      that.minDec++;
      that.minCen = 0;
    }
    if (that.minDec >= 6) {
      that.minDec = 0;
      that.minCen = 0;
      that.secDec = 0;
      that.secCen = 0;
    }
    that.paintingNumbers();
  },1*1000);
};

Cronometer.prototype.changeLeftButton = function (){
  var classLeft = document.getElementById("btnLeft");
  if (classLeft.className === "btn start"){
    classLeft.className = "btn stop";
    classLeft.innerHTML = "STOP";
  }
  else {
    classLeft.className = "btn start";
    classLeft.innerHTML = "START";
  }
};

Cronometer.prototype.changeRightButton = function (){
    var classRight = document.getElementById("btnRight");
    if (classRight.className === "btn reset"){
      classRight.className = "btn split";
      classRight.innerHTML = "SPLIT";
    }
    else {
      classRight.className = "btn reset";
      classRight.innerHTML = "RESET";
    }
};

Cronometer.prototype.stopClick = function() {
  this.changeLeftButton();
  this.changeRightButton();
  clearInterval(this.status);
};

Cronometer.prototype.paintingNumbers = function() {
  document.getElementById("minDec").innerHTML = this.minDec;
  document.getElementById("minCen").innerHTML = this.minCen;
  document.getElementById("secDec").innerHTML = this.secDec;
  document.getElementById("secCen").innerHTML = this.secCen;
};
