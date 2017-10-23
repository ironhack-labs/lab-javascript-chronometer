function Crono(){
  this.minutes = 0;
  this.seconds = 0;
  this.miliseconds = 0;
}

var minDec = document.getElementById("minDec");
var minCen = document.getElementById("minCen");
var secDec = document.getElementById("secDec");
var secCen = document.getElementById("secCen");
var milDec = document.getElementById("milDec");
var splitList = document.getElementById("split");
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var showInterval;

Crono.prototype.startClick = function() {
  this.startCount();
  this.changeButtonLeft();
  this.changeButtonRight();
}

Crono.prototype.stopClick = function() {
  clearInterval(showInterval);
  this.changeButtonLeft();
  this.changeButtonRight();
}

Crono.prototype.startCount = function() {
  var thisCrono = this;
  showInterval = setInterval(function(){
  thisCrono.miliseconds++;
  thisCrono.updateMiliseconds(thisCrono);
  thisCrono.updateSeconds(thisCrono);
  thisCrono.updateMinutes(thisCrono);
 } ,10);
}

Crono.prototype.updateMiliseconds = function(thisCrono) {
  if(thisCrono.miliseconds == 99) {
    thisCrono.seconds++;
    thisCrono.miliseconds = 0;
  }

  if(thisCrono.miliseconds < 10) {
    milDec.innerHTML = "0" + thisCrono.miliseconds;
  } else {
    milDec.innerHTML = thisCrono.miliseconds;
  }
}

Crono.prototype.updateSeconds = function(thisCrono) {
  if(thisCrono.seconds >= 60){
    thisCrono.seconds = 0;
    thisCrono.minutes += 1;
  }

  if(thisCrono.seconds < 10) {
    secDec.innerHTML = 0;
    secCen.innerHTML = thisCrono.seconds;
  } else {
    secDec.innerHTML = thisCrono.seconds.toString().split('')[0];
    secCen.innerHTML = thisCrono.seconds.toString().split('')[1];
  }
}

Crono.prototype.updateMinutes = function(thisCrono) {
  if(thisCrono.minutes < 10) {
     minDec.innerHTML = 0;
     minCen.innerHTML = thisCrono.minutes;
   } else {
     minDec.innerHTML = thisCrono.minutes.toString().split('')[0];
     minCen.innerHTML = thisCrono.minutes.toString().split('')[1];
   }
}

Crono.prototype.changeButtonLeft = function() {
  if(btnLeft.className == "btn start") {
    btnLeft.className = "btn stop";
    btnLeft.innerHTML = "STOP";

  } else {
    btnLeft.innerHTML = "START";
    btnLeft.className ="btn start";
  }
}

Crono.prototype.changeButtonRight = function() {
  if(btnRight.className == "btn reset") {
    btnRight.className = "btn split";
    btnRight.innerHTML = "SPLIT";
  } else {
    btnRight.innerHTML = "RESET";
    btnRight.className ="btn reset";
  }
}

Crono.prototype.splitTime = function() {
  var newItem = document.createElement("li");
  newItem.innerHTML =  this.currentTime();
  splitList.appendChild(newItem);
}

Crono.prototype.currentTime = function() {
  return ((this.minutes < 10) ? '0' + this.minutes : this.minutes) + ":" +
     ((this.seconds < 10) ? '0' + this.seconds : this.seconds) + ":" +
     ((this.miliseconds < 10) ? '0' + this.miliseconds : this.miliseconds);
}

Crono.prototype.resetTime = function() {
  minDec.innerHTML = 0;
  minCen.innerHTML = 0;
  secDec.innerHTML = 0;
  secCen.innerHTML = 0;

  while(splitList.firstChild) {
    splitList.removeChild(splitList.firstChild);
  }
  this.minutes = 0;
  this.seconds = 0;
}
