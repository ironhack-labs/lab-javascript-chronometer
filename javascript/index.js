const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

console.log('Que es minDecElement', minDecElement.innerText)

function printTime() {

  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {

  let minutes = chronometer.getMinutes();
  minDecElement.innerText = chronometer.computeTwoDigitNumber(minutes)[0];
  minUniElement.innerText = chronometer.computeTwoDigitNumber(minutes)[1];
}

function printSeconds() {

  let seconds = chronometer.getSeconds();
  secDecElement.innerText = chronometer.computeTwoDigitNumber(seconds)[0];
  secUniElement.innerText = chronometer.computeTwoDigitNumber(seconds)[1];
}

// Parametros creados fuera de cualquier function
let contador = 0;
    const miliSeconds = setInterval(() => {
      contador++;
      if(contador > 99){
        contador = 0;
      }
    },1);


function getMiliSeconds() {
  valor =(('0'+contador).slice(-2));
  return valor;
}


// ==> BONUS
function printMilliseconds() {
  let mil_sec = getMiliSeconds();
  milDecElement.innerText = `${mil_sec}`[0];
  milUniElement.innerText = `${mil_sec}`[1];

}

///////////////////////////////////////////////////

function printSplit() {

  let mil_sec = chronometer.computeTwoDigitNumber(getMiliSeconds);

  const list_ident = document.createElement('li');
  list_ident.innerText = `${chronometer.split()}:${getMiliSeconds()}`;
  const orden_list = document.getElementById('splits');
  orden_list.appendChild(list_ident);
  console.log('getMiliSeconds',getMiliSeconds())
}

function clearSplits() {
  const parent = document.querySelectorAll('li');
  parent.forEach(element =>{element.remove()});
}

function setStopBtn() {

  btnLeftElement.className = 'btn start';
  btnLeftElement.innerHTML = 'START';
  btnRightElement.className = 'btn reset';
  btnRightElement.innerHTML = 'RESET';
  chronometer.stop();
  contador = 0;
}

function setSplitBtn() {

  printSplit();
}

function setStartBtn() {

  btnLeftElement.className = 'btn stop';
  btnLeftElement.innerHTML = 'STOP';
  btnRightElement.className = 'btn split';
  btnRightElement.innerHTML = 'SPLIT';
  chronometer.start();
}

function setResetBtn() {

  chronometer.reset();
  clearSplits();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.className === 'btn start'){
    setStartBtn();
  }else {
    setStopBtn();
  }
  //Va mostrando en el reloj el cambio de tiempo
  setInterval(()=>(printTime()),10);
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnRightElement.innerHTML === 'SPLIT'){
    setSplitBtn();
  } else {
    setResetBtn()}
});
