/*clase o prototipo va en mayuscula*/ /*(parametros)*/
/* tiene atributos y métodos*/
/*this.objeto el this llama al objeto del objeto*/

function Chronometer() {}

/*definicion de un objeto*/

secCenCont = 0;
secDecCont = 0;
minCenCont = 0;
minDecCont = 0;
milSecLeft = 0;
milSecRight = 0;
Chronometer.prototype.startClick = function() {
  btnLeft = document.getElementById('btnLeft');
  btnRight = document.getElementById('btnRight');
  if (btnLeft.className === 'btn start') {
    btnLeft.className = 'btn stop';
    btnLeft.innerHTML = 'STOP';
    btnRight.className = 'btn split';
    btnRight.innerHTML = 'SPLIT';
    id = setInterval(function() {
      secCen.innerHTML = secCenCont;
      secDec.innerHTML = secDecCont;
      minCen.innerHTML = minCenCont;
      minDec.innerHTML = minDecCont;
      milSecL.innerHTML = milSecLeft;
      milSecR.innerHTML = milSecRight;
      milSecRight++;
      if (milSecRight == 10) {
        milSecRight = 0;
        milSecLeft++;
      } else if (milSecLeft === 10) {
        milSecLeft = 0;
        secCenCont++;
      } else if (secCenCont == 10) {
        secCenCont = 0;
        secDecCont++;
      } else if (secDecCont == 6) {
        secDecCont = 0;
        minCenCont++;
      } else if (minCenCont == 10) {
        minCenCont = 0;
        minDecCont++;
      } else if (minDecCont == 10) {
        id = clearInterval(id);
      }
    }, 10);
  }
};
Chronometer.prototype.stopClick = function() {
  btnLeft = document.getElementById('btnLeft');
  if (btnLeft.className == 'btn stop') {
    btnLeft.className = 'btn start';
    btnLeft.innerHTML = 'START';
    btnRight.className = 'btn reset';
    btnRight.innerHTML = 'RESET';
    id = clearInterval(id);
  }
};

Chronometer.prototype.recordTime = function() {
  btnRight = document.getElementById('btnRight');
  timeList = document.getElementById('timeList');
  totalTime = [
    minDecCont +
      '' +
      minCenCont +
      '' +
      ':' +
      secDecCont +
      '' +
      secCenCont +
      ' ' +
      milSecLeft +
      '' +
      milSecRight
  ];
  if (btnRight.className == 'btn split') {
    item = document.createElement('li');
    timeList.appendChild(item);
    item.innerHTML = totalTime;
  }
};
Chronometer.prototype.resetTime = function() {
  btnRight = document.getElementById('btnRight');
  timeList = document.getElementById('timeList');
  secCen.innerHTML = 0;
  secDec.innerHTML = 0;
  minCen.innerHTML = 0;
  minDec.innerHTML = 0;
  milSecL.innerHTML = 0;
  milSecR.innerHTML = 0;
  while (timeList.hasChildNodes()) timeList.removeChild(timeList.firstChild);
};
