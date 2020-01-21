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
    minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
    minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
}

function printSeconds() {
    secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
    secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
}

// function printMilliseconds() {

// }

function printSplit() {
    let node = document.createElement("li");      
    let timeLapsed = chronometer.twoDigitsNumber(chronometer.getMinutes()) + ":" + chronometer.twoDigitsNumber(chronometer.getSeconds());
    console.log(`timelapsed `, timeLapsed);
    node.innerHTML = timeLapsed;         
    document.getElementById("splits").appendChild(node); 
}

function clearSplits() {
    console.log(`dentro`);
    minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
    minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
    secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
    secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
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
btnLeft.addEventListener('click', function (){

    if(btnLeft.innerText === "STOP") {
        chronometer.stopClick();
        btnLeft.innerText = "START";
        btnLeft.setAttribute("class","btn start");

        btnRight.innerText = "RESET";
        btnRight.setAttribute("class", "btn reset");

    }else{
        chronometer.startClick();
        btnLeft.innerText = "STOP";
        btnLeft.setAttribute("class", "btn stop");

        btnRight.innerText = "SPLIT";   //Fail!
        btnRight.setAttribute("class","btn split");
    }
    console.log(`currentTime `, chronometer.currentTime);
    
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

    if(btnRight.innerText === "RESET") {
        chronometer.resetClick();
        clearSplits();
        btnRight.innerText = "SPLIT";
        btnRight.setAttribute("class","btn split");
    }else{
        printSplit();
        // btnRight.innerText = "RESET";
        // btnRight.setAttribute("class", "btn reset");
    }
    console.log(`currentTime `, chronometer.currentTime);

});

/*Iteration 4: Reset
To finish up with this lesson, we are going to create the clear feature. Remember we will execute this when the chronometer is stopped and the user clicks on the right button. The behavior here is very simple: we have to clear all the data on the clock.

To do that, we will have to set the minutes and seconds to zero in our clock and remove all the <li> elements that we could have in the list we created in the previous iteration.*/



//Receive Data Time
// function receiveDataTime(){
   
//     let seconds = chronometer.getSeconds();

//     let minutesTwoDigits = twoDigitsNumber(minutes);
//     let secondsTwoDigits = twoDigitsNumber(seconds);

//     let minutesTwoDigitsSeparated = minutesTwoDigits.split("");
//     let secondsTwoDigitsSeparated = minutesTwoDigits.split("");

//     let minutesDocens = minutesTwoDigitsSeparated[0];
//     let minutesUnits  = minutesTwoDigitsSeparated[1];

//     let secondsDocens = secondsTwoDigitsSeparated[0];
//     let secondsUnits  = secondsTwoDigitsSeparated[1];

//     minDec.appendChild = minutesDocens;
//     minUni.appendChild = minutesUnits;
//     secDec.appendChild = secondsDocens;
//     secUni.appendChild = secondsUnits;   

//     // var str = "21";
//     // var res = str.split("");
//     // console.log(res);

// }

//Reference
// startClick() {
//     this.intervalId = setInterval(() => {
//        this.currentTime = this.currentTime + 1;
//      }, 1000);
//  }


