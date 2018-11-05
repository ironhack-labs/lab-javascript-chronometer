var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var lista = document.getElementById('splits');

btnLeft.addEventListener('click',function(){
    if(btnLeft.innerHTML === "START"){
        btnLeft.classList.remove("start");
        btnLeft.className = "btn stop"
        btnLeft.innerHTML = "STOP"
        btnRight.classList.remove("reset");
        btnRight.className = "btn split"
        btnRight.innerHTML = "SPLIT"
        chronometer.startClick()
        mostrar()
        
        
    }else{
        btnLeft.classList.remove("stop");
        btnLeft.className = "btn start"
        btnLeft.innerHTML = "START"
        btnRight.classList.remove("split");
        btnRight.className = "btn reset"
        btnRight.innerHTML = "RESET"
        chronometer.stopClick()
    }
    
})
var mostrar = function(){ 
    setInterval(function(){
    var m = String(chronometer.minut)
    var s = String(chronometer.secon)
    
    minDec.innerHTML = m.substring(0,1)
    minUni.innerHTML = m.substring(1,2)
    secDec.innerHTML = s.substring(0,1)
    secUni.innerHTML = s.substring(1,2)
},1000)}
btnRight.addEventListener('click',function(){
    if(btnRight.innerHTML ==="SPLIT"){
        var splitli = document.createElement('li')
        var node = document.createTextNode(String(chronometer.minut)+':'+String(chronometer.secon))
        splitli.appendChild(node)
        lista.appendChild(splitli)

    }else{
        
        chronometer.resetClick()
        mostrar()
       
        while(lista.firstChild){
            lista.removeChild(lista.firstChild)
        }
        
        
    }
})

function printTime() {

}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

