const chronometer = new Chronometer();
const btnLeft     = document.getElementById('btnLeft');
const btnRight    = document.getElementById('btnRight');
const minDec      = document.getElementById('minDec');
const minUni      = document.getElementById('minUni');
const secDec      = document.getElementById('secDec');
const secUni      = document.getElementById('secUni');
const milDec      = document.getElementById('milDec');
const milUni      = document.getElementById('milUni');


function printTime() {
  printSeconds()
  printMinutes()
  printMilliseconds()

}

function printMinutes() {
  // En

  const twoDMinutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
  //
  const arrMinutes = twoDMinutes.split("")
  //
  minDec.innerText = arrMinutes[0]
  minUni.innerText = arrMinutes[1]
}

function printSeconds() {
  // recupero los segundos
  const  seconds = chronometer.getSeconds()
  //lo convierto en un string de dos cifras
  const twoDSeconds = chronometer.twoDigitsNumber(seconds)
  //Lo convierto en un array separado por los dos digitos
  const arrSeconds = twoDSeconds.split("")
  // muestro en pantalla cada uno de los decimales 
  secDec.innerText = arrSeconds[0]
  secUni.innerText = arrSeconds[1]
}

function printMilliseconds() {

}

function printSplit() {
  const newListElement = document.createElement("li")
  // Apuntar elemento <ol>
  const olId = document.getElementById("splits")
  // Anidar elemento hijo
  olId.appendChild(newListElement)
  // incluir el tiempo 
  
  //console.info('LI => ', minDec.innerText)
  newListElement.innerText = `${minDec.innerText}${minUni.innerText}:${secDec.innerText}${secUni.innerText}`
  
}

function clearSplits() {
  const list = document.getElementById("splits")
  list.innerHTML =""
}

function setStopBtn() {
  chronometer.stopClick()

}

function setSplitBtn() {
  chronometer.splitClick()
  printSplit()
}

function setStartBtn() {
  chronometer.startClick()
  
}

function setResetBtn() {
  
  chronometer.resetClick()
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  
  if (this.classList.contains("start")) {
    setStartBtn()
  } else {
    setStopBtn()
  }
  this.classList.toggle("start")
  this.classList.toggle("stop")
  this.innerText = this.innerText === "START" ? "STOP" : "START"


  btnRight.classList.toggle("split")
  btnRight.classList.toggle("reset")
  
  btnRight.innerText = btnRight.innerText === "SPLIT" ? "RESET" : "SPLIT"


});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (this.classList.contains("split")) {
    setSplitBtn()
  } else {
    setResetBtn()
    clearSplits()
    setStartBtn ()
    this.classList.replace("reset","split")
    this.innerText = "SPLIT"
  }
  
});
