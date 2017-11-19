function Chronometer() {

}
var createPartialTimeLi = function(secCen, secDec, minCen, minDec, milCen, milDec) {
  olTag = document.getElementById('olTimeList');
  liTag = document.createElement('li');
  liTag.setAttribute('class', 'li-time-list');
  text = document.createTextNode(minDec + minCen + ':' + secDec + secCen + ':' + milDec + milCen+"\"");
  liTag.appendChild(text);
  olTag.appendChild(liTag);
};
var eliminateTimeList = function() {
  document.getElementById('secCen').innerHTML = "0";
  document.getElementById('secDec').innerHTML = "0";
  document.getElementById('minCen').innerHTML = "0";
  document.getElementById('minDec').innerHTML = "0";
  document.getElementById('milCen').innerHTML = "0";
  document.getElementById('milDec').innerHTML = "0";
  document.getElementById('olTimeList').innerHTML = 'Split';

};
var countSecondsMinutes = function(secCen, secDec, minCen, minDec, milCen, milDec) {
  milCen += 1;
  startZeroSeconds = setInterval(function() {
    if (milCen === 10) {
      milCen = 0;
      milDec += 1;
      if (milDec === 10) {
        milDec = 0;
        secCen += 1;
        if (secCen === 10) {
          secCen = 0;
          secDec += 1;
          if (secDec === 6) {
            secDec = 0;
            minCen += 1;
            if (minCen === 10) {
              minCen = 0;
              minDec += 1;
            }
          }
        }
      }
    }
    document.getElementById('secCen').innerHTML = secCen;
    document.getElementById('secDec').innerHTML = secDec;
    document.getElementById('minCen').innerHTML = minCen;
    document.getElementById('minDec').innerHTML = minDec;
    document.getElementById('milCen').innerHTML = milCen;
    document.getElementById('milDec').innerHTML = milDec;
    milCen++;
  }, 10);
};

Chronometer.prototype.startClick = function(whichBtn) {
  secCen = document.getElementById('secCen').innerHTML;
  secDec = document.getElementById('secDec').innerHTML;
  minCen = document.getElementById('minCen').innerHTML;
  minDec = document.getElementById('minDec').innerHTML;
  milCen = document.getElementById('milCen').innerHTML;
  milDec = document.getElementById('milDec').innerHTML;
  if (whichBtn === "btnLeft") {
    btnLeft = document.getElementById('btnLeft');
    btnLeft.setAttribute('class', 'btn stop');
    document.getElementById('btnLeft').innerHTML = 'STOP';
    btnRight = document.getElementById('btnRight');
    btnRight.setAttribute('class', 'btn split');
    document.getElementById('btnRight').innerHTML = 'SPLIT';
    countSecondsMinutes(parseInt(secCen), parseInt(secDec), parseInt(minCen), parseInt(minDec), parseInt(milCen), parseInt(milDec));
    return "startClick";
  } else if (whichBtn === "btnRight") {
    //HACER QUE SE GUARDE EL TIEMPO EN LA LISTA
    if (document.getElementById('btnLeft').innerHTML === 'STOP') {
      createPartialTimeLi(secCen, secDec, minCen, minDec, milCen, milDec);
    }
    return "startClick";
  }
};
Chronometer.prototype.stopClick = function(whichBtn) {
  if (whichBtn === "btnLeft") {
    clearInterval(startZeroSeconds);
    btnLeft = document.getElementById('btnLeft');
    btnLeft.setAttribute('class', 'btn start');
    document.getElementById('btnLeft').innerHTML = 'START';
    btnRight = document.getElementById('btnRight');
    btnRight.setAttribute('class', 'btn reset');
    document.getElementById('btnRight').innerHTML = 'RESET';
    return "stopClick";
  } else if (whichBtn === "btnRight") {
    //HACER QUE EL TIEMPO Y LA LISTA SE BORRE
    if (document.getElementById('btnLeft').innerHTML === 'START') {
      eliminateTimeList();
    }
    return "stopClick";
  }
};
