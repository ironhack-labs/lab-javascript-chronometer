var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');

// Start/Stop Button
const leftBtnlistener = () => {
  if (btnLeft.className == 'btn start') {
    btnLeft.classList = 'btn stop';
    btnLeft.textContent = 'STOP';
    chronometer.startClick();
  } else {
    btnLeft.className = 'btn start';
    btnLeft.textContent = 'START';
    btnRight.classList.toggle = 'split';
    chronometer.stopClick();
  }

  window.setInterval(() => {
    let getSec = chronometer.twoDigitsNumber(chronometer.getSeconds());

    secDec.textContent = getSec.charAt(0);
    secUni.textContent = getSec.charAt(1);

    let getMin = chronometer.twoDigitsNumber(chronometer.getMinutes());
    getMin.textContent = getMin.charAt(0);
    getMin.textContent = getMin.charAt(1);
  });
};

// Event
btnLeft.onclick = leftBtnlistener;
//

// Reset/Split Button
const rightBtnListener = () => {
  if (btnRight.className == 'btn reset') {
    chronometer.resetClick();
  } else {
    btnRight.className = 'btn reset';
  }
};

btnRight.onclick = rightBtnListener;
