window.onload = function() {

  let btnLeft = document.getElementById("btnLeft");
  let btnRight = document.getElementById("btnRight");

  btnLeft.onclick = function() {
    if (btnLeft.innerHTML === "START") {
      chronometer.startStopWatch();
      btnLeft.innerHTML = "STOP";
      btnLeft.classList.remove(".btn.start");
      btnRight.classList.remove(".btn.reset");
      btnRight.innerHTML = "SPLIT";
    }
    else if (btnLeft.innerHTML === "STOP"){
      chronometer.stopStopWatch();
      btnRight.innerHTML = "RESET";
    }
  }

  btnRight.onclick = function() {
    if (btnRight.innerHTML === "SPLIT"){
      chronometer.split();
    }  

    if (btnRight.innerHTML === "RESET") {
      chronometer.reset();
      btnLeft.innerHTML = "START";
    }
  }
}
