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
