  var minDecDigit = document.getElementById("minDec");
  var minCenDigit = document.getElementById("minCen");
  var secDecDigit = document.getElementById("secDec");
  var secCenDigit = document.getElementById("secCen");
  // var milDec = document.getElementById("milDec");
  // var milUni = document.getElementById("milUni");


function Chronometer () {

}


var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");

Chronometer.prototype.startClick = function(){
    btnLeft.className = 'btn stop';
    btnLeft.innerHTML = 'STOP';
    btnRight.className = 'btn split';
    btnRight.innerHTML = 'SPLIT';
    this.counter();

};



Chronometer.prototype.stopClick = function () {
    btnLeft.className = 'btn start';
    btnLeft.innerHTML = 'START';
    btnRight.className = 'btn reset';
    btnRight.innerHTML = 'RESET';
    clearInterval(this.intervalId);


};




Chronometer.prototype.counter = function(){
  var secCen = 0;
  var secDec = 0;
  var minCen = 0;
  var minDec = 0;

   this.intervalId = setInterval (function(){
    secCen++;
      if(secCen > 9){
        secCen = 0;
        secDec++;
      }
      if(secDec === 5 && secCen === 9){
        secDec = 0;
        minCen++;
      }
      if(minCen > 9){
        minCen = 0;
        minDec++;
      }
      if(minDec === 5 && minCen){
        minDec = 0;
        minCen = 0;
      }

      secCenDigit.innerHTML = secCen;
      secDecDigit.innerHTML = secDec;
      minCenDigit.innerHTML = minCen;
      minDecDigit.innerHTML = minDec;

    }, 1000);

  };


Chronometer.prototype.reset = function () {
  btnRight.className = 'btn split';
  btnRight.innerHTML = 'SPLIT';

  secCenDigit.innerHTML = 0;
  secDecDigit.innerHTML = 0;
  minCenDigit.innerHTML = 0;
  minDecDigit.innerHTML = 0;

};

Chronometer.prototype.split = function (){

};
