var chrono = new Chronometer();

var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');

function showTime() {
    setInterval(printTime, 10)  // to call printTime function every 10 milisec
}

function printTime() {
    printMinutes();
    printSeconds();
    printMilliseconds();
}

function printMinutes() {
    chrono.minutes = chrono.twoDigitsNumber(chrono.setMinutes());       
    minDec.innerHTML = parseInt(chrono.minutes.charAt(0), 10);       // converts first char of string to number 
    minUni.innerHTML = parseInt(chrono.minutes.charAt(1), 10);           // converts 2nd char of string to number


}

function printSeconds() {
    chrono.seconds = chrono.twoDigitsNumber(chrono.setSeconds());
    secDec.innerHTML = parseInt(chrono.seconds.charAt(0), 10);
    secUni.innerHTML = parseInt(chrono.seconds.charAt(1), 10);


}

function printMilliseconds() {
    chrono.milliSeconds = chrono.twoDigitsNumber(chrono.setMilliSeconds());     // converts milisec string to number
    var len = chrono.milliSeconds.length;                                       //calculated total length of milisec
    milDec.innerHTML = parseInt(chrono.milliSeconds.charAt(len - 2), 10);       //last 2 digit fetched
    milUni.innerHTML = parseInt(chrono.milliSeconds.charAt(len - 1), 10);

}

function printSplit() {
    var showSplitTime = minDec.innerHTML + minUni.innerHTML + " : " + secDec.innerHTML + secUni.innerHTML + " : " + milDec.innerHTML + milUni.innerHTML;
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(showSplitTime);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("splits").appendChild(node);    //displays text of <Li> node to <UL> id splits

}

function clearSplits() {
    var list = document.getElementById("splits");   // Get the <ul> element with id="splits"
    list.innerHTML = "";

}

function setStopBtn() {                     //when clicked button color & text chnged
    btnLeft.innerHTML = "START"
    btnLeft.style.backgroundColor = "#5fca5f"
    btnRight.innerHTML = "RESET"
    btnRight.style.backgroundColor = "#908e8e"


}

function setSplitBtn() {
    printSplit();
}



function setStartBtn() {                    // when start button clicked,  color of buttons change and text as well

    if (btnLeft.innerHTML == "START") {
        btnLeft.innerHTML = "STOP"
        btnLeft.style.backgroundColor = "#f14949"
        btnRight.innerHTML = "SPLIT"
        btnRight.style.backgroundColor = "#0851ab"
        chrono.startClick();
    }

    else {
        setStopBtn();
        chrono.stopClick();
    }
}


function setResetBtn() {                    // when reset button clicked changes of color and text of other button changes
        if (btnRight.innerHTML == "RESET") {
        btnLeft.innerHTML = "START"
        btnLeft.style.backgroundColor = "#5fca5f"
        chrono.currentTime = 0;
        chrono.stopClick();                 // setInterval stopped
        clearSplits();                      // splits text cleared

    }
    else {

        setSplitBtn();

    }
}

// Start/Stop Button

btnLeft.addEventListener('click', function () {
    setStartBtn();
    showTime();

});

// Reset/Split Button

btnRight.addEventListener('click', function () {
    setResetBtn();

});
