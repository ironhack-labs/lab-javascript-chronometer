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
  // decirle que imprima los minutos + los segundos llamando a las 2 funciones 

  printMinutes()
  printSeconds()

}

function printMinutes() {
  // decirle la posición de los minutos
minDecElement.innerText = chronometer.split()[0]
minUniElement.innerText = chronometer.split()[1]

}

function printSeconds() {
  // decirle la posición de los segundos
secDecElement.innerText = chronometer.split()[3]
secUniElement.innerText = chronometer.split()[4]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here

}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
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
// switch de los contenidos de los botones start/stop  a la vez que añadir split y reset
btnLeftElement.addEventListener('click', () => {

if (btnLeftElement.innerHTML === 'START') {
  //botón stop
  btnLeftElement.innerHTML = 'STOP'
  btnLeftElement.className = 'btn stop'
  //botón split
  btnRightElement.innerHTML = 'SPLIT'
  btnRightElement.className = 'btn split'
 //asignar bontón start al cronómetro
  chronometer.start();
 // intervalo
    setInterval(function () {
      printTime();
    }, 1000)
  }

else if (btnLeftElement.innerHTML === 'STOP') {
  //botón start
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.className = 'btn start';
// botón reset
  btnRightElement.className = 'btn reset';
  btnRightElement.innerHTML = 'RESET';
  //asignar botón stop al cronómetro
  chronometer.stop();
    }
  // ... your code goes here
startButton.onclick(start(callback))
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

// asignar funciones reset/ split al cronómetro
if (btnRightElement.innerHTML === 'RESET') {
  //cronometro reset
chronometer.reset();
  }
else if (btnRightElement.innerHTML === 'SPLIT') {
 //cronometro split
chronometer.split();
}
});
