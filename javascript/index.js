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


  // ... your code goes here
  printMinutes();
  printSeconds()
}

function printMinutes() {
  // ... cambiamos nuestro html llamando a la función twoDigitsNumber y pasandole como parametro getMinutes y cogiendo el primer valor
  minDec.innerHTML= chronometer.twoDigitsNumber(chronometer.getMinutes()[0]);
  minUni.innerHTML= chronometer.twoDigitsNumber(chronometer.getSeconds()[1]);
}

function printSeconds() {
  // ... Lo mismo que en printMinutes
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds()[0])
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds()[1])
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here

}

function printSplit() {
  // ... Creamos la lista
  let liList = document.createElemt('li');
  //Le metemos el contenido de la función splitClick
  liList.innerHTML= chronometer.splitClick();
  // Le añadimos a splits lo que hemos hecho.
  splits.appendChild(liList)



}

function clearSplits() {
  // ... your code goes here
  //Metemos en html el splits vacío
  splits.innerHTML= "";
}

function setStopBtn() {
  // ... your code goes here
  //Renombramos la clase:
  document.getElementById('btnLeft').className = 'btn stop';
  //Cambiamos a START
  document.getElementById('btnLeft').innerHTML = 'STOP';
  
  
  
}

function setSplitBtn() {
  // ... your code goes here
  document.getElementById('btnRight').className = 'btn split';
  //Cambiamos a SPLIT
  document.getElementById('btnRight').innerHTML = 'SPLIT';
}

function setStartBtn() {
  // ... your code goes here
  document.getElementById('btnLeft').className = 'btn start';
  //Cambiamos a START
  document.getElementById('btnLeft').innerHTML = 'START';
}

function setResetBtn() {
  // ... your code goes here
  document.getElementById('btnRight').className = 'btn reset';
  //Cambiamos a START
  document.getElementById('btnRight').innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});
