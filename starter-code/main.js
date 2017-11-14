var crono = new Chronometer('btnLeft', 'btnRight', 'secCen', 'secDec', 'minCen', 'minDec', 'milCen', 'milDec');

// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function() {
  if (crono.leftBtn.innerText === 'START') {
    crono.startClick("btnLeft");
  } else if (crono.leftBtn.innerText === 'STOP') {
    crono.stopClick("btnLeft");
  }
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function() {
  if (crono.rightBtn.innerText === 'SPLIT') {
    crono.startClick("btnRight");
  } else if (crono.rightBtn.innerText === 'RESET') {
    crono.stopClick("btnRight");
  }
});
