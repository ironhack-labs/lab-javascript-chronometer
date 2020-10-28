const chronometer = new Chronometer();

const screen =  {
  btnLeft : document.getElementById("btnLeft"),
  btnRight : document.getElementById("btnRight"),
  minDec : document.getElementById("minDec"),
  minUni : document.getElementById("minUni"),
  secDec : document.getElementById("secDec"),
  secUni : document.getElementById("secUni"),
  milDec : document.getElementById("milDec"),
  milUni : document.getElementById("milUni"),
  splits : document.getElementById("splits"),
};



function printTime() {
  let objChrono = chronometer;
  let objScreen = screen;
  printMinutes(objChrono,objScreen);
  printSeconds(objChrono,objScreen);
  printMilliseconds(objChrono,objScreen);
}

function printMinutes(objChrono,objScreen) {
  objScreen.minUni.innerText = objChrono.twoDigitsNumber(objChrono.getMinutes())[1];
  objScreen.minDec.innerText = objChrono.twoDigitsNumber(objChrono.getMinutes())[0];
}

function printSeconds(objChrono,objScreen) {
  objScreen.secUni.innerText = objChrono.twoDigitsNumber(objChrono.getSeconds())[1];
  objScreen.secDec.innerText = objChrono.twoDigitsNumber(objChrono.getSeconds())[0];
}

function printMilliseconds(objChrono,objScreen) {
  objScreen.milUni.innerText = objChrono.twoDigitsNumber(objChrono.getMilliseconds())[1];
  objScreen.milDec.innerText = objChrono.twoDigitsNumber(objChrono.getMilliseconds())[0]; 
}

function printSplit(objScreen,timefunc) {
  objScreen.splits.innerHTML += `<li>${timefunc}</li>`;
}

function clearSplits(objScreen) {
  objScreen.splits.innerHTML = '';
}

function setStopBtn(objChrono,objScreen) {
    objChrono.stopClick();
    objScreen.btnLeft.classList.toggle("stop");
    objScreen.btnLeft.classList.toggle("start");
    objScreen.btnLeft.innerText = "START";
    objScreen.btnRight.classList.toggle("reset");
    objScreen.btnRight.classList.toggle("split");
    objScreen.btnRight.innerText = "RESET";
}

function setSplitBtn(objChrono,objScreen) {
  printSplit(objScreen,objChrono.splitClick())
}

function setStartBtn(objChrono,objScreen) {
    objChrono.startClick(printTime); //PRECISO CHAMAR A CALLBACK PASSANDO PARAMETRO, BUT HOW ?
    objScreen.btnLeft.classList.toggle("stop");
    objScreen.btnLeft.classList.toggle("start");
    objScreen.btnLeft.innerText = "STOP";
    objScreen.btnRight.classList.toggle("reset");
    objScreen.btnRight.classList.toggle("split");
    objScreen.btnRight.innerText = "SPLIT";
}

function setResetBtn(objChrono,objScreen) {
    objChrono.resetClick();
    objScreen.secUni.innerText = 0;
    objScreen.secDec.innerText = 0;
    objScreen.minUni.innerText = 0;
    objScreen.minDec.innerText = 0;
    objScreen.milDec.innerText = 0;
    objScreen.milUni.innerText = 0;
    objScreen.splits.innerHTML = "";
}

// Start/Stop Button
screen.btnLeft.addEventListener("click", () => {
  if (btnLeft.innerText === "START") {
    setStartBtn(chronometer,screen);
  } else {
    setStopBtn(chronometer,screen);
  }
});

// Reset/Split Button
screen.btnRight.addEventListener("click", () => {
  if (btnLeft.innerText === "START") {    
    setResetBtn(chronometer,screen);
  } else {
    setSplitBtn(chronometer,screen);
  }
});