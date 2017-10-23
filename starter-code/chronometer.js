var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var secCen = document.getElementById("secCen");
var secDec = document.getElementById("secDec");
var minCen = document.getElementById("minCen");
var minDec = document.getElementById("minDec");


function Chronometer () {

}

Chronometer.prototype.startClick = function () {
  if (btnLeft.innerText === "START") {
    btnLeft.innerText = 'STOP';
    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop');
    btnRight.innerText = "SPLIT";
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
  } else {
    btnLeft.innerText = 'START';
    btnLeft.classList.remove('stop');
    btnLeft.classList.add('start');
    btnRight.innerText = "RESET";
    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
    }

};

Chronometer.prototype.startTimer = function(){
  var counterSecCent = 0;
  var counterDecCent = 0;
  var counterMinCent = 0;
  var counterMinDec = 0;
  console.log(secCen);
  setInterval(toTen, 1000);
  function toTen (){
    counterSecCent++;
    secCen.innerHTML = counterSecCent%10;
  }
  setInterval (toSix, 10000);
  function toSix (){
    counterDecCent++;
    secDec.innerHTML = counterDecCent%6;
  }
  // change to min:
  setInterval(toTen, 60000);
  function toMinTen (){
    counterMinCent++;
    minCen.innerHTML = counterMinCent%10;
  }
  setInterval (toSix, 100000);
  function toMinSix (){
    counterMinDec++;
    minDec.innerHTML = counterMinDec%6;
  }
};

var chronometer= new Chronometer();


var splitClick = btnRight.addEventListener("click", function () {



});
