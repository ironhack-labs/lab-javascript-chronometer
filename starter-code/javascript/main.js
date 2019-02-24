var chronometer = new Chronometer();

var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


var getIdSetTimeout = 0;


function printTime() {

}

function printMinutes() {

}

function printSeconds() {   

}

function printMilliseconds() {

    

}

function printSplit() {

 chronometer.splitClick(milDec.textContent,milUni.textContent,secDec.textContent,secUni.textContent,minDec.textContent,minUni.textContent)
}

function clearSplits() {

}

function setStopBtn() {

 

  chronometer.stopClick(getIdSetTimeout)

}

function setSplitBtn() {

}

function setStartBtn() {


    getIdSetTimeout =  setInterval(function(){

       chronometer.startClick()

    },10)
 
   


}

function setResetBtn() {

    chronometer.resetClick(getIdSetTimeout)

}

// Start/Stop Button
btnLeft.addEventListener('click', function (e) {
    


    if(btnLeft.textContent=="START"){
        setStartBtn()
        btnLeft.textContent ="STOP"
        btnLeft.setAttribute("class", "btn stop");

        btnRight.textContent="SPLIT"
        btnRight.setAttribute("class", "btn split");
    }else{
        setStopBtn()
        btnLeft.textContent="START"
        btnLeft.setAttribute("class", "btn start");
        btnRight.textContent="RESET"             
        btnRight.setAttribute("class", "btn reset"); 
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {


    if(btnRight.textContent=="RESET"){
        
        btnLeft.textContent ="START"

        setResetBtn()

    
    }else if(btnRight.textContent=="SPLIT"){ 


        printSplit();
         
        
    }else if(btnLeft.textContent=="START"){

        btnRight.textContent=="RESET"

        
    }

});
