var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
const input     = document.querySelector('#splits');


function printTime() {



 minDec.innerText=printMinutes()[0]
 minUni.innerText=printMinutes()[1]
 secDec.innerText=printSeconds()[0]
 secUni.innerText=printSeconds()[1]

}

function printMinutes() {
return chronometer.twoDigitsNumber(chronometer.getMinutes())
}

function printSeconds() {
return chronometer.twoDigitsNumber(chronometer.getSeconds())
}

function printMilliseconds() {

}

function printSplit() {
    const ol=document.querySelector('#splits')
    const node = document.createElement('li')
    node.innerText=printMinutes()+':'+printSeconds()
    ol.appendChild(node)
}

function clearSplits() {
//OPCION 1
const oli = document.querySelector("#splits");
while (oli.firstChild) {
  oli.removeChild(oli.firstChild);
}
/*
  OPCION2 TAMBIEN FUNCIONA C:
  const lis = document.querySelectorAll('li')
  lis.forEach((li)=>li.remove()) 
*/
}




function setStopBtn() {
    btnLeft.innerText="STOP"
    btnLeft.setAttribute('class', 'btn stop')
    
}

function setSplitBtn() {
    btnRight.innerText="SPLIT"
    btnRight.setAttribute("class", "btn split" )
}

function setStartBtn() {
   btnLeft.innerText="START"
   btnLeft.setAttribute("class", "btn start" )

}

function setResetBtn() {
    btnRight.innerText="RESET"
    btnRight.setAttribute("class", "btn reset" )
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.innerText==="START"){
      
        chronometer.startClick()
       setInterval( printTime)

    setStopBtn() 
    setSplitBtn() 
    }else{
        chronometer.stopClick()
    setStartBtn()
    setResetBtn()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.innerText==="RESET"){
      
        chronometer.resetClick()
       
        clearSplits()

    
    }else{
        printSplit()
        
    
    }

});
