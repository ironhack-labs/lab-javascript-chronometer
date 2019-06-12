var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
const ul        = document.getElementById("splits");
getter()
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

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.innerText=="STOP"){
        btnLeft.innerText = 'START'
        btnRight.innerText = 'RESET'
        document.getElementById("btnLeft").className = "btn start"
        document.getElementById("btnRight").className = "btn reset"
        chronometer.stopClick()
    }else{
    btnLeft.innerText = 'STOP'
    btnRight.innerText = 'SPLIT'
    document.getElementById("btnLeft").className = "btn stop"
    document.getElementById("btnRight").className = "btn split"
    chronometer.startClick()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.innerText=="RESET"){
        chronometer.currentTime=0
        chronometer.mili=0
        getter()
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    }else{
        todo = document.createElement("li")
        let a =chronometer.getMinutes()
        let b = chronometer.getSeconds()
        let c = chronometer.getmili()
        c=chronometer.twoDigitsNumber(c)
        a=chronometer.twoDigitsNumber(a)
        b=chronometer.twoDigitsNumber(b)
        todo.innerText = (`${a}:${b}:${c}`)
        ul.appendChild(todo)
    }
});

function getter(){
    let a =chronometer.getMinutes()
    let b = chronometer.getSeconds()
    let c = chronometer.getmili()
    a=chronometer.twoDigitsNumber(a)
    b=chronometer.twoDigitsNumber(b)
    c=chronometer.twoDigitsNumber(c)
    minDec.innerText =`${a[0]}`
    minUni.innerText=`${a[1]}`
    secDec.innerText=`${b[0]}`
    secUni.innerText=`${b[1]}`
    milDec.innerText=`${c[0]}`
    milUni.innerText=`${c[1]}`

}
intervalId=setInterval(()=>{
    getter()
  },1)


