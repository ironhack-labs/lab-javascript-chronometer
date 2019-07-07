var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


// BUTTONS
btnLeft.addEventListener('click', function () {
    if (btnLeft.getAttribute("class") == "btn start") {
        btnLeft.setAttribute("class", "btn stop");
        btnLeft.innerHTML = "STOP";
        this.chronometer.startClick();
        btnRight.innerHTML = "SPLIT";
        btnRight.setAttribute("class", "btn split");
        btnRight.onclick = setSplitBtn;
    }
    else if (btnLeft.getAttribute("class") == "btn stop") {
        btnLeft.setAttribute("class","btn start");
        btnLeft.innerHTML = "START";
        this.chronometer.stopClick();
        btnRight.innerHTML = "RESET";
        btnRight.setAttribute("class", "btn reset");
        btnRight.onclick = setResetBtn;
    }
}.bind(this));

function printTime() {
    let currentValue = chronometer.setTime();
    minDec.innerHTML = currentValue.charAt(0);
    minUni.innerHTML = currentValue.charAt(1);
    secDec.innerHTML = currentValue.charAt(2);
    secUni.innerHTML = currentValue.charAt(3);
    return currentValue.charAt(0) + currentValue.charAt(1) + ":" + currentValue.charAt(2) + currentValue.charAt(3);
}
function setSplitBtn() {
    let split1 = document.createElement("li");
    split1.innerHTML = printTime();
    document.getElementById("splits").appendChild(split1);
}
function setResetBtn() {
    chronometer.resetButton();
    printTime();
    let splitList = document.getElementById("splits");
    splitList.innerHTML = "";
}