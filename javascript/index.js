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

// PARA IMPRIMIR EL TIEMPO: MINUTOS Y SEGUNDOS
function printTime() {  // A esta función le indicamos que al llamarla ejecute las funciones de printMinutes y printSeconds.
  printMinutes();       
  printSeconds();
}

// PARA IMPRIMIR MINUTOS
function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes()); // guardo en una variable la función de computeTwoDigitNumber que recibe la función de getMinutes como parámetro. De esta manera ocurre el proceso de ir añadiendo minutos.
  minDecElement.textContent = minutes[0];  // Indico que el contenido de texto del elemento minDecElement (que equivale a las decenas) sea minutes con index[0], para que aparezca en el primer número.
  minUniElement.textContent = minutes[1];  // Indico que el contenido de texto del elemento minUniElement (que equivale a las unidades) sea minutes con index[1], para que aparezca en el segundo número.
}

// PARA IMPRIMIR SEGUNDOS
function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds()); // Aquí hago el mismo proceso que con los minutos pero esta vez para los segundos. 
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {

}

// PARA IMPRIMIR UNA CAPTURA DEL TIEMPO (SPLIT).
function printSplit() {
  const splitListElement = document.createElement("li");  // Creo un nuevo elemento que sea una lista.            
  splitListElement.innerText = chronometer.split();  // Indico que el texto de ese elemento lista sea lo que devuelve la función .split() que está en la clase cronómetro.
  splitsElement.appendChild(splitListElement);       // Adjunto el elemento de lista al elemento de lista ordenada <ol> que ya habíamos localizado por su id (al principio del archivo).
}

// PARA BORRAR LOS SPLITS Y PONER A 0 EL TIEMPO DEL CRONÓMETRO.
function clearSplits() {
  splitsElement.innerHTML = "";                    // Indico que lo que se encuentra dentro de splitsElement sea un string vacío. De esta manera elimino los elementos de <li> que haya adjuntados a splitsElement.
  chronometer.reset();                             // Llamo a la función reset() que se encuentra en el cronómetro.
  minDecElement.innerText = "0";                   // Indico que el texto de todos los elementos de minutos y segundos sea 0.
  minUniElement.innerText = "0";
  secDecElement.innerText = "0";
  secUniElement.innerText = "0";
}

// PARA PONER EL BOTÓN START
function setStartBtn() {
  btnLeftElement.classList.toggle("stop");         // Utilizo toggle para quitar la clase .stop del botón (al tener la clase .stop, toggle quita esta clase)
  btnLeftElement.classList.toggle("start");        // Utilizo toggle para añadir la clase .start al botón (al no tener la clase .start, toggle la añade).
  btnLeftElement.innerText = "START";              // Indico que el texto del contenido del botón sea START.
}

// PARA PONER EL BOTÓN RESET
function setResetBtn() {
  btnRightElement.classList.toggle("split");       // Utilizo toggle para quitar la clase .split del botón.
  btnRightElement.classList.toggle("reset");       // Utilizo toggle para añadir la clase .reset al botón.
  btnRightElement.innerText = "RESET"              // Indico que el texto del contenido del botón sea RESET.
}

// PARA PONER EL BOTÓN STOP
function setStopBtn() {
  btnLeftElement.classList.toggle("start");        // Utilizo toggle para quitar la clase .start.
  btnLeftElement.classList.toggle("stop");         // Utilizo toggle para añadir la clase .stop.
  btnLeftElement.innerText = "STOP";               // Indico que el texto del elemento del botón sea STOP.
}

// PARA PONER EL BOTÓN SPLIT
function setSplitBtn() {
  btnRightElement.classList.toggle("reset");       // Utilizo toggle para quitar la clase .reset.
  btnRightElement.classList.toggle("split");       // Utilizo toggle para añadir la clase .split.
  btnRightElement.innerText = "SPLIT";             // Indico que el texto del elemento del botón sea SPLIT.
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains("start")) {  // Indico que si el elemento del botón izq. contiene la clase .start:
    setStopBtn();                                    // Llamo a la función setStopBtn() (para que cambie al botón stop).
    chronometer.start(printTime);                    // Llamo a .start(printTime) para que inicie la cuenta de minutos y segundos.
    setSplitBtn();                                   // Llamo a .setSplitBtn() (para que cambie al botón split).
  } else {                                           // Si no (es decir, si el botón no tiene clase .start y por tanto tiene la clase .stop).
    setStartBtn();                                   // Llamo a la función setStartBtn(). (para que cambie al botón start).
    chronometer.stop();                              // Llamo a la función .stop para que al clickar se pare el cronómetro.
    setResetBtn();                                   // Llamo a setResetBtn() para que al parar el cronómetro aparezca el botón de reset.
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains("reset")) { // Indico que si el elemento del botón izq. contiene la clase .reset:
    clearSplits();                                   // Llamo a la función clearSplits() para que al pulsar el reset se resetee todo el cronómetro.
  } else {                                           // Si no (es decir, si contiene la clase .reset y por tanto tiene la clase .split):
    printSplit();                                    // Llamo a la función printSplit() para que cada vez que haga click en el botón split imprima una captura del tiempo en ese momento.
  }
});
