const chronometer = new Chronometer();  // Han creado una nueva instancia de la clase Chronometer.

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');    // Acceden al elemento del botón izq. a través de su id en el HTML.
const btnRightElement = document.getElementById('btnRight');  // Acceden al elemento del botón dcho. a través de su id en el HTML.

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');      // Acceden a todos los elementos de tiempo a través de su id en el HTML. 
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {  // A esta función le indicamos que al llamarla ejecute las funciones de printMinutes y printSeconds.
  printMinutes();       
  printSeconds();
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes()); // guardo en una variable la función de computeTwoDigitNumber que recibe la función de getMinutes como parámetro. De esta manera ocurre el proceso de ir añadiendo minutos.
  minDecElement.textContent = minutes[0];  // Indico que el contenido de texto del elemento minDecElement (que equivale a las decenas) sea minutes con index[0], para que aparezca en el primer número.
  minUniElement.textContent = minutes[1];  // Indico que el contenido de texto del elemento minUniElement (que equivale a las unidades) sea minutes con index[1], para que aparezca en el segundo número.
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds()); // Aquí hago el mismo proceso que con los minutos pero esta vez para los segundos. 
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
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
    btnLeftElement.classList.toggle("stop");         // Utilizo toggle para quitar la clase .stop del botón (al tener la clase .stop, toggle quita esta clase)
    btnLeftElement.classList.toggle("start");        // Utilizo toggle para añadir la clase .start al botón (al no tener la clase .start, toggle la añade).
    btnLeftElement.innerText = "START";              // Indico que el texto del contenido del botón sea START.
    chronometer.stop()                               // LLamo a la función stop() para que así se pare el contador.
}

function setSplitBtn() {
  btnRightElement.classList.toggle("split");         // Utilizo toggle para quitar la clase .split del botón.
  btnRightElement.classList.toggle("reset");         // Utilizo toggle para añadir la clase .reset al botón.
  btnRightElement.innerText = "RESET"                // Indico que el texto del contenido del botón sea RESET.
}

function setStartBtn() {
    btnLeftElement.classList.toggle("start");        // Utilizo toggle para quitar la clase .start.
    btnLeftElement.classList.toggle("stop");         // Utilizo toggle para añadir la clase .stop.
    btnLeftElement.innerText = "STOP";               // Indico que el texto del elemento del botón sea STOP.
    chronometer.start(printTime);                    // LLamo a la función start() y le paso como parámetro la función printTime (que ejecuta las funciones de printMinutes y printSeconds) para que el tiempo comience a contar.
}

function setResetBtn() {
  btnRightElement.classList.toggle("reset");         // Utilizo toggle para quitar la clase .reset.
    btnRightElement.classList.toggle("split");       // Utilizo toggle para añadir la clase .split.
    btnRightElement.innerText = "SPLIT";             // Indico que el texto del elemento del botón sea SPLIT.
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains("start")) {  // Indico que si el elemento del botón izq. contiene la clase .start:
    setStartBtn();                                   // Llamo a la función setStartBtn().
  } else {                                           // Si no (es decir, si el botón no tiene clase .start y tiene clase .stop pq no hay más opciones):
    setStopBtn();                                    // Llamo a la función setStopBtn().
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains("reset")) { // Indico que si el elemento del botón izq. contiene la clase .reset:
    setResetBtn();                                   // Llamo a la función setResetBtn().
  } else {                                           // Si no (es decir, si contiene la clase .split):
    setSplitBtn();                                   // Llamo a la función setSplitBtn().
  }
});
