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
  //Mandamos llamar la funciones de minutos y de segundos
  printMinutes()
  printSeconds()
}

function printMinutes() {
  // ... your code goes here
  let minutes=chronometer.getMinutes() 
  let twoDigitals=chronometer.computeTwoDigitNumber(minutes)
  let twoDigitalArray=twoDigitals.split('')
  minDecElement.innerHTML=twoDigitalArray[0]
  minUniElement.innerHTML=twoDigitalArray[1]
}

function printSeconds() {
  let seconds=chronometer.getSeconds()//traernos los segunos
  let twoDigitals= chronometer.computeTwoDigitNumber(seconds)//traernos y cambiar nuestros segundos a dos digitos
  let twoDigitArray=twoDigitals.split('')//separar los digitos
  secDecElement.innerHTML=twoDigitArray[0]//
  secUniElement.innerHTML=twoDigitArray[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  let split=chronometer.split()
  splitsElement.innerHTML  += `<li>${split}</li>` // añadir elementos a la lista ordenada
}

function clearSplits() {
  splitsElement.innerHTML = null // para poder borrar los splits y limpiar el espacio

}

function setStopBtn() {
  chronometer.stop()
    btnLeftElement.classList.value='btn start'
    btnLeftElement.innerHTML='START'

    btnRightElement.classList.value='btn reset'
    btnRightElement.innerHTML='RESET'
}

function setSplitBtn() {
  chronometer.split()
  printSplit()
}

function setStartBtn() {
  chronometer.start(printTime) //  como callback printtime para imprimir cada segundo en la funcion setInterval
    btnLeftElement.classList.value='btn stop' //1
    btnLeftElement.innerHTML='STOP'
    
    btnRightElement.classList.value='btn split'//Cambiar el boton derecho a split
    btnRightElement.innerHTML='SPLIT'
}

function setResetBtn() {
  // ... your code goes here
  chronometer.reset()
    printTime()
    clearSplits()
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  
  console.log(btnLeftElement.classList.value)

  if(btnLeftElement.classList.value ==='btn start'){
    setStartBtn()
  } else if(btnLeftElement.classList.value==='btn stop'){
    setStopBtn()
  }
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
  if(btnRightElement.classList.value==='btn reset'){   // si el boton rigth esta en reset realiza las siguientes :
    setResetBtn()

  }else if(btnRightElement.classList.value==='btn split'){// si el boton right esta en split realiza las siguientes:
    setSplitBtn()
  }
  
});


//classList nos devuelve la lista de clases del elemento html