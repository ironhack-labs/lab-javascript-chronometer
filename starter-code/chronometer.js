function Chronometer(display, btnLeft, btnRight) {
  this.display = document.getElementById('sphere');
  this.btnLeft = document.getElementById('btnLeft');
  this.btnRight = document.getElementById('btnRight');
}

function clickStructureBtn(newClassLeft, newTextLeft, newClassRight, newTextRight) {
  btnLeft.className = newClassLeft;
  btnLeft.innerHTML = "";
  leftText = document.createTextNode(newTextLeft);
  btnLeft.appendChild(leftText);

  btnRight.className = newClassRight;
  btnRight.innerHTML = "";
  rightText = document.createTextNode(newTextRight);
  btnRight.appendChild(rightText);
}

Chronometer.prototype.startClick = function() {
  clickStructureBtn("btn stop", "STOP", "btn split", "SPLIT");
};

Chronometer.prototype.stopClick = function() {
  clickStructureBtn("btn start", "START", "btn reset", "RESET");
};

Chronometer.prototype.startCounting = function() {
  centesimalNum = document.getElementById("secCen");
  decimalNum = document.getElementById("secDec");

  minuteCentesimalNum = document.getElementById("minCen");
  minuteDecimalNum = document.getElementById("minDec");

  var centesimalCounter = 0;
  var decimalCounter = 0;
  var minuteCentesimalCounter= 0;
  var minuteDecimalCounter= 0;

  function count() {
    centesimalCounter++;
    if (centesimalCounter === 10) {
      centesimalCounter = 0;
      decimalCounter++;

      if (decimalCounter === 6) {
        decimalCounter = 0;
        minuteCentesimalCounter++;

        if (minuteCentesimalCounter === 10) {
          minuteCentesimalCounter = 0;
          minuteDecimalCounter++;

          if (minuteDecimalCounter === 10) {
            clearInterval(countInterval);
          }
        }
      }
    }

    centesimalNum.innerHTML = "";
    centesimalNewValue = document.createTextNode(centesimalCounter);
    centesimalNum.appendChild(centesimalNewValue);

    decimalNum.innerHTML = "";
    decimalNewValue = document.createTextNode(decimalCounter);
    decimalNum.appendChild(decimalNewValue);

    minuteCentesimalNum.innerHTML = "";
    minuteCentesimalNewValue = document.createTextNode(minuteCentesimalCounter);
    minuteCentesimalNum.appendChild(minuteCentesimalNewValue);

    minuteDecimalNum.innerHTML = "";
    minuteDecimalNewValue = document.createTextNode(minuteDecimalCounter);
    minuteDecimalNum.appendChild(minuteDecimalNewValue);
  }

  var countInterval = setInterval( count, 1000 );
};
