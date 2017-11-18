function Chronometer() {

}
var countSecondsMinutes = function(secCen, secDec, minCen, minDec) {
  secCen += 1;
  startZeroSeconds = setInterval(function() {
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
    document.getElementById('secCen').innerHTML = secCen;
    document.getElementById('secDec').innerHTML = secDec;
    document.getElementById('minCen').innerHTML = minCen;
    document.getElementById('minDec').innerHTML = minDec;
    secCen++;
  }, 1000);
};
Chronometer.prototype.startClick = function(whichBtn) {
  if (whichBtn === "btnLeft") {
    secCen = document.getElementById('secCen').innerHTML;
    secDec = document.getElementById('secDec').innerHTML;
    minCen = document.getElementById('minCen').innerHTML;
    minDec = document.getElementById('minDec').innerHTML;
    btnLeft = document.getElementById('btnLeft');
    btnLeft.setAttribute('class', 'btn stop');
    document.getElementById('btnLeft').innerHTML = 'STOP';
    countSecondsMinutes(secCen, secDec, minCen, minDec);
    
    return "startClick";
  } else if (whichBtn === "btnRight") {
    btnRight = document.getElementById('btnRight');
    btnRight.setAttribute('class', 'btn reset');
    document.getElementById('btnRight').innerHTML = 'RESET';
    return "startClick";
  }
};
Chronometer.prototype.stopClick = function(whichBtn) {
  if (whichBtn === "btnLeft") {
    clearInterval(startZeroSeconds);
    btnLeft = document.getElementById('btnLeft');
    btnLeft.setAttribute('class', 'btn start');
    document.getElementById('btnLeft').innerHTML = 'START';
    return "stopClick";
  } else if (whichBtn === "btnRight") {
    btnRight = document.getElementById('btnRight');
    btnRight.setAttribute('class', 'btn split');
    document.getElementById('btnRight').innerHTML = 'SPLIT';
    return "stopClick";
  }
};
