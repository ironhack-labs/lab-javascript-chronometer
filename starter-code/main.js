// Start/Stop Button
/*document.getElementById("btnLeft").addEventListener("click", function () {
  console.log("Left button clicked");

  btnLeft = document.getElementById("btnLeft");
  btnRight = document.getElementById("btnRight");

  if (btnLeft.className === "btn start") {
    btnLeft.className = "btn stop";
    btnLeft.innerHTML = "";
    stopText = document.createTextNode("STOP");
    btnLeft.appendChild(stopText);

    btnRight.className = "btn split";
    btnRight.innerHTML = "";
    splitText = document.createTextNode("SPLIT");
    btnRight.appendChild(splitText);
  } else {
    btnLeft.className = "btn start";
    btnLeft.innerHTML = "";
    startText = document.createTextNode("START");
    btnLeft.appendChild(startText);

    btnRight.className = "btn reset";
    btnRight.innerHTML = "";
    resetText = document.createTextNode("RESET");
    btnRight.appendChild(resetText);
  }
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  console.log("Right button clicked");
});*/


var chronometer = new Chronometer();

chronometer.btnLeft.addEventListener("click", function () {
  if (btnLeft.className === "btn start") {
    chronometer.startClick();
    chronometer.startCounting();
  } else {
    chronometer.stopClick();
  }
});
