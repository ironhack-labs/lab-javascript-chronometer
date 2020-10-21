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

function printTime() {
  printMinutes();
  printSeconds();
  /*printMilliseconds();*/
}

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];

}

function printSeconds() {
   secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
   secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
/*function printMilliseconds() {
  milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
}*/

function printSplit(time) {
  let newSplit = document.getElementById('splits');
  let newListSplit = document.createElement('li');
  let timeSet = document.createTextNode(time);
    newListSplit.appendChild(timeSet);
    newSplit.appendChild(newListSplit);
}

function clearSplits() {
  let clearSpl = document.getElementById('splits').reset();
  /*clearSpl.innerHTML='';*/
} 
  /*document.getElementById('btnRight').onclick();
  document.getElementById('#splits-container').reset();*/


}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP';
  btnLeft.setAttribute('class', 'btn stop'); //inserir opcao stop no botao html

} 

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.setAttribute('class', 'btn split'); // inserir opcao split no botao html
}

function setStartBtn() {
  btnLeft.innerHTML = 'START';
  btnLeft.setAttribute('class', 'btn start');
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.setAttribute('class', 'btn reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === 'START') {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn(); 
 }else{
   chronometer.stopClick();
   setStartBtn();
   setResetBtn();
 }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML === 'RESET') {
    chronometer.resetClick();
    clearSplits();
  } else {
    chronometer.splitClick();
  }
});
