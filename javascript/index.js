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

function printTime() {
  // imprime el tiempo
  printMinutes();
  printSeconds();
  printMilliseconds();

}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes [1];
  // puedo usarlo asi porque los string los puedo tratar como un array, entonces uso las posiciones como si fuera un array
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());  
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds [1];
}

// ==> BONUS
function printMilliseconds() {
  const milisegundos = chronometer.computeTwoDigitNumber(chronometer.getMiliseconds());
  milDecElement.textContent = milisegundos[0];
  milUniElement.textContent = milisegundos [1];
}

function printSplit() {
  console.log("estoy imprimiendo los splits");
  const splitP = chronometer.split();
  chronometer.split();
}

function clearSplits() {
  let splits = document.getElementsByClassName('elemento-de-lista');
  Array.from(splits).forEach(element => {
    element.remove();
  });
}

function setStopBtn() {
  
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // if (this.intervalId !== null) {
    // Si el cronómetro esta en funcionamiento haz lo de a continuación
    btnRightElement.className === 'btn reset'
      ? (btnRightElement.className = 'btn split')
      : (btnRightElement.className = 'btn reset');
    btnRightElement.textContent === 'SPLIT' 
      ? (btnRightElement.textContent ='RESET' ) 
      : (btnRightElement.textContent ='SPLIT');

    btnLeftElement.className === 'btn start' 
      ? (btnLeftElement.className = 'btn stop') 
      : (btnLeftElement.className = 'btn start');
    btnLeftElement.textContent === 'STOP' 
      ? (btnLeftElement.textContent = 'START') 
      : (btnLeftElement.textContent = 'STOP');  
  // }

  btnLeftElement.className === "btn start" ? chronometer.stop() : chronometer.start(printTime);
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  btnRightElement.className === "btn reset" ? chronometer.reset() : chronometer.split();
  
  if(btnRightElement.className === "btn reset" ){
    clearSplits();
  }

});
