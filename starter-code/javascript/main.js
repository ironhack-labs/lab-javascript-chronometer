var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
    printMinutes();
    printSeconds();
}

function printMinutes() {
    const min = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.innerText = min[0];
    minUni.innerText = min[1];

}

function printSeconds() {
    const sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secDec.innerText = sec[0];
    secUni.innerText = sec[1];

}

function printMiliseconds() {
    const mil = chronometer.getMilliseconds();
    milDec.innerText = mil[1];
    milUni.innerText = mil[0];
}

function printSplit() { // DOM

    const divList = document.getElementById('splits') // Busco el div padre ol splits donde insertaré li
    const divLi = document.createElement('li')        // Creo el elmento li donde pintaré current time
    divLi.innerText = `${minDec.innerText}${minUni.innerText}:${secDec.innerText}${secUni.innerText}`  // Pinto los span con las cifras   
    divList.appendChild(divLi)                        // a Padre le inserto hijo

}

function clearSplits() {
    const cleanList = document.getElementById('splits') // Busco el elemento padre 'splits'
    cleanList.innerText = ""                            // Hago que el contenido se vacíe
}

function setStopBtn() { // Esta función hacer que al presionar "STOP"...
   // chronometer.stopClick()
   btnLeft.innerText = 'START'                          // El botón Left tenga texto START
   btnLeft.setAttribute("class", "btn start")           // la clase pase a btn start | color verde
   btnRight.innerText = 'RESET'                         // El botón Right tenga texto RESET
   btnRight.setAttribute("class", "btn reset")          // la clase pase a btn reset | color azul
}

function setSplitBtn() {
    chronometer.splitClick()    // Devuelve el tiempo
    printSplit()                // Imprime el tiempo en splits
}

function setStartBtn() { // Esta función hacer que al presionar "START", inmediatamente aparezca "STOP"
    //chronometer.startClick()
    btnLeft.innerText = 'STOP'
    btnLeft.setAttribute("class", "btn stop")
    btnRight.innerText = 'SPLIT'
    btnRight.setAttribute("class", "btn split")
}

function setResetBtn() { // Quiero que al presionar reset, pase a ser STOP y SPLIT
    // chronometer.resetClick()
    btnLeft.innerText = 'STOP'
    btnLeft.setAttribute("class", "btn stop")
    btnRight.innerText = 'SPLIT'
    btnRight.setAttribute("class", "btn split")
}

// Start/Stop Button
btnLeft.addEventListener('click', function () { // Botón izquiero OnClick..
    if (this.classList.contains('start')) {     // Si la clase contiene 'start' y clickamos
      setStartBtn()                             // Pasa de verde a rojo y de poner START a poner STOP
      chronometer.startClick()                  // OnClick, empieza el conómetro
      setInterval(printTime, 100)               //¡OJO! no poner "printTime()" | Print time comienz al milisegundo de nuevo

    } else if (this.classList.contains('stop')) {   // Si la clase contiene 'stop' y clickamos
      setStopBtn()                                  // Pasa de rojo a verde y de poner STOP a START
      chronometer.stopClick()                       // el conómetro se detien
    
    } 
  });

// Reset/Split Button

btnRight.addEventListener('click', function () {    // Botón derecho onClick
        if(this.classList.contains('reset')){       // Si la clase contiene "reset" y clickamos
        setResetBtn()                               // Pasa el botón izquierdo a ser STOP y rojo y el derecho SPLIT y azul
        chronometer.resetClick()                    // Pasa a resetarse | Se para, Se pone a 0, Imprime minutos y segundos y Comienza el tiempo
        clearSplits()
        //setInterval(printTime, 100) 

        } else if (this.classList.contains('split')) {  // Si la clase es "split" y clickamos
        setSplitBtn()                                   // setSplitBtn | pintamos el current time
        }

        //     this.classList.toggle('reset')
        //     this.classList.toggle('split')

        //     this.innerText = this.innerText === 'RESET' ?   'SPLIT' : 'RESET'
        });
