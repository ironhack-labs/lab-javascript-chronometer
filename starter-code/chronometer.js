function Chronometer(){

}
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");

var secCenDigit = document.getElementById("secCen");
var secDecDigit = document.getElementById("secDec");
var minCenDigit = document.getElementById("minCen");
var minDecDigit = document.getElementById("minDec");

Chronometer.prototype.startClick = function () {
  btnLeft.className = "btn stop";
  btnLeft.innerHTML = "STOP";
  btnRight.className = "btn split";
  btnRight.innerHTML = "SPLIT";
  this.startCounter();
};

Chronometer.prototype.stopClick = function () {
  btnLeft.className = "btn start";
  btnLeft.innerHTML = "START";
  btnRight.className = "btn reset";
  btnRight.innerHTML = "RESET";
};

Chronometer.prototype.startCounter = function (){
  var secCen = 0;
  var secDeC = 0;
  var minCen = 0;
  var minDec = 0;

  this.invervalId = setInterval(function(){
    secCen++;
    console.log(secCen);

    if(secCen > 9){
      secCen = 0;
      secDec++;
      console.log(secDec);
    }
    // if(secDec == 5 && secCen > 9){
    //   secDec = 0;
    //   minCen++;
    // }
    // if(minCen > 9 && secCen > 9){
    //   minCen = 0;
    //   minDec++;
    // }
    // if(minDec == 9 && secCen >9){
    //
    // }

    secCenDigit.innerHTML = secCen;
    secDecDigit.innerHTML = secDec;
    minCenDigit.innerHTML = minCen;
    minDecDigit.innerHTML = minDec;


  }, 1000);






};
