var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var classLeft = btnLeft.className;
var i = 0;
var stopSec = 9;

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

Chronometer.prototype.setIntervalId = function(){
  setInterval(function(){
      console.log(i);
    i++;
    if( i < 9){
      clearInterval();
    }
  },1000);
};

Chronometer.prototype.stopClick = function(){
    classLeft = btnLeft.className;
    btnLeft.innerHTML = "START";
    btnRight.innerHTML = "RESET";
    btnLeft.className = "btn start";


};
