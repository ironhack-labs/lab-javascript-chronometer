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
    printMilliseconds();
}

function printMinutes() {
    var firstNum = chronometer.minutes[0];
    var secondNum = chronometer.minutes[1]; 
    minUni.innerHTML = secondNum;
    minDec.innerHTML = firstNum;
}

function printSeconds() {
    var firstNum = chronometer.seconds[0];
    var secondNum = chronometer.seconds[1];
    secUni.innerHTML = secondNum;
    secDec.innerHTML = firstNum;

}

function printMilliseconds() {

}

function printSplit() {
    var li = document.createElement("li");
    var node = document.createTextNode(minDec.innerHTML + minUni.innerHTML+ ":" + secDec.innerHTML + secUni.innerHTML);
    var splits = document.getElementById("splits");
    li.appendChild(node);
    splits.appendChild(li);
}

function clearSplits() {
    var myNode = document.getElementById("splits");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
}

function setStopBtn() {
    chronometer.stopClick();
    
    btnLeft.innerHTML = "START";
    btnLeft.classList.add("start");
    btnLeft.classList.remove("stop");
}

function setSplitBtn() {
    
    
}

function setStartBtn() {
    chronometer.startClick();
    
    btnLeft.innerHTML = "STOP";
    btnLeft.classList.add("stop");
    btnLeft.classList.remove("start");
}

function setResetBtn() {
     chronometer.resetClick();
    
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
   
    
   if (btnLeft.innerHTML === "STOP") {
    setStopBtn()
    btnRight.innerHTML = "RESET";
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");

    } else {
        setStartBtn();
        btnRight.innerHTML = "SPLIT";
        btnRight.classList.add("split");
    };

  
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.innerHTML === "RESET") {
        clearSplits();
        setResetBtn();
       } else {
        setSplitBtn();
        printSplit();
       };
});
