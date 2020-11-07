const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

//printa os minutos e os segundos
function printTime() {
  printMinutes();
  printSeconds();
}
  //função para printar os minutos
function printMinutes() {
  // cria variavel para armazenar o getMinutos do chronometer
  const minutes = chronometer.getMinutes();
  // cria variavel e retorna o twoDigitsNumbers com o parametro minutes
  const twoDigits = chronometer.twoDigitsNumber(minutes);
  minDec.innerHTML = twoDigits[0];
  minUni.innerHTML = twoDigits[1];
}
  //função para printar os segundos
function printSeconds() {

  // cria variavel para armazenar o getSeconds do chronometer
  const seconds = chronometer.getSeconds();
  // cria variavel e retorna o twoDigitsNumbers com o parametro seconds
  const twoDigits = chronometer.twoDigitsNumber(seconds);
  secDec.innerHTML = twoDigits[0];
  secUni.innerHTML = twoDigits[1];
}

  // ==> BONUS
function printMilliseconds() {
  //MUITO DIFICIL CHOREI MORRI.
}
  //Criando função para printar o split
function printSplit() {
  
  let split = chronometer.splitClick();
  let li = document.createElement("li");
  li.innerHTML = split;
  splits.appendChild(li)
  
}
  //função para limpar o splits
function clearSplits() {
  splits.innerHTML = "";
}
  //setar botão stop
function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.textContent = "STOP";
}
  //setar botão split
function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.textContent = "SPLIT";
}
  //setar botão Start
function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.textContent = "START";
}
  //setar botão Reset
function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.textContent = "RESET";
}

  // Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.className === "btn start") {
    setStopBtn()
    setSplitBtn()
    chronometer.startClick(printTime);
  } else {
    setStartBtn()
    setResetBtn()
    chronometer.stopClick();
  }
});	

  // Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.className === "btn split") {
    printSplit()
  } else {
    chronometer.resetClick()
    printTime()
    clearSplits()
  }
});
