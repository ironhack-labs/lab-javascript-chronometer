var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var secCen = document.getElementById("secCen");
var secDec = document.getElementById("secDec");

var classLeft = btnLeft.className;
var iCen = 0;
var iDec = 0;

function Chronometer(min,seg){
  this.min = min;
  this.seg = seg;
}

Chronometer.prototype.startClick = function(){
    classLeft = btnLeft.className;
    btnLeft.innerHTML = "STOP";
    btnRight.innerHTML = "SPLIT";
    btnLeft.className = "btn stop";

};



Chronometer.prototype.StopSec = function(){
  var StopSec = setInterval(function(){

    if( iCen == 10){
      iCen = 0;
      iDec++;
      secDec.innerHTML = iDec;
      //clearInterval(StopSec);
    }
      secCen.innerHTML = iCen;

    if (iDec == 5){
          iDec = 0;
      }
        iCen++;
    },500);
};

Chronometer.prototype.stopClick = function(){
    classLeft = btnLeft.className;
    btnLeft.innerHTML = "START";
    btnRight.innerHTML = "RESET";
    btnLeft.className = "btn start";


};
