const chronometer = new Chronometer();
let intervalID2=null;
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

  
 
    
    printSeconds()
    printMinutes()

}

function printMinutes() {
  
  // ... your code goes here
  let imprimirM=chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  let arrM=imprimirM.split("")
  console.log(arrM)
  minDecElement.innerHTML=arrM[0];
  minUniElement.innerHTML=arrM[1];
}

function printSeconds() {
  // ... your code goes here
  let imprimirS=chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  //console.log(imprimirS)
  //hacemos un array con SPlit para partir el string
 let arrS= imprimirS.split("");
 //console.log(arrS)

 secDecElement.innerHTML=arrS[0];
 secUniElement.innerHTML=arrS[1];


}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  let nuevoTiempo=chronometer.split()
  //PAra preservar el valor anterior +el nuevo y asi agrega un elemeneto LI con el tiempo 
  splitsElement.innerHTML+=`
  <li>${nuevoTiempo}</li>
  `


}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  //Class list te trae todas las clases del objeto
  //removemos la classe de start del boton
 btnLeftElement.classList.remove('start');
 //agregamos el texto STOP
 btnLeftElement.innerHTML=`STOP`;
 //agregamos la clase stop 
 btnLeftElement.classList.add('stop');
}

function setSplitBtn() {
  // ... your code goes here
  //removemos la clase reset
  btnRightElement.classList.remove('reset');
  //agregamos el texto split
  btnRightElement.innerHTML='SPLIT';
  //agregamos la clase split
  btnRightElement.classList.add('split')
}

function setStartBtn() {
  btnLeftElement.classList.remove('stop');
  //agregamos el texto STOP
  btnLeftElement.innerHTML=`START`;
  //agregamos la clase stop 
  btnLeftElement.classList.add('start');
}

function setResetBtn() {
  btnRightElement.classList.remove('split');
  //agregamos el texto split
  btnRightElement.innerHTML='RESET';
  //agregamos la clase split
  btnRightElement.classList.add('reset')
}

// Start/Stop Button
btnLeftElement.addEventListener('click', (event) => {
  //al objeto que se refiere, btn left element 
  //Nos referimos al evento que estamos seleciconando
  if (event.target.innerText=="START"){
    //invocamos las funciones
    setStopBtn();
    setSplitBtn();
    
    //llamamos a la clase choronometro con el methodo start
    chronometer.start();
    //hacemos un intervalo para que print Time se invoque cada 1 Segunndo
    //la variable intervalID2 esta hasta arriba como variable global para poder accerder a ella
    intervalID2=setInterval(printTime,1000)
    //printTime();
  } else if(event.target.innerText=="STOP"){
    setStartBtn();
    setResetBtn();
    chronometer.stop();
    //
    clearInterval(intervalID2);
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', (event) => {
  if(event.target.innerText=="SPLIT"){
    printSplit();
  } else{
    chronometer.reset()
    //ejecutarlo una ultimavez, ya que arriba se limpia el intervalo en el stop
    printTime()
    //LIMPIA EL LI
    splitsElement.innerHTML=``

  }
  
});