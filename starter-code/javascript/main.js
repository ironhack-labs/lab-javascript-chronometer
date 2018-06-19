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
setInterval(function(){
    printMinutes();
    printSeconds();
    printMilliseconds();

},10);
        

}

function printMinutes() {

    var time=chronometer.setTime();
    document.getElementById("minDec").innerHTML=time[0][0];
    document.getElementById("minUni").innerHTML=time[0][1];

}

function printSeconds() {
    var time=chronometer.setTime();
    document.getElementById("secDec").innerHTML=time[1][0];
    document.getElementById("secUni").innerHTML=time[1][1];
}

function printMilliseconds() {
    var time=chronometer.setTime();
    document.getElementById("milDec").innerHTML=time[2][0];
    document.getElementById("milUni").innerHTML=time[2][1];

}

function printSplit() {

var child=document.createElement("li");

var time=chronometer.setTime();
child.innerHTML=time[0] + ":" + time[1] + ":" + time[2];

var parent=document.getElementById("splits");
parent.appendChild(child);


}

function clearSplits() {

   var parent=document.getElementById("splits");
    
   while (document.getElementsByTagName("li").length>0)

        parent.removeChild(document.getElementsByTagName("li")[0]);
}

function setStopBtn() {

document.getElementById("btnLeft").className="btn stop";
document.getElementById("btnLeft").innerHTML="STOP";

}

function setSplitBtn() {
    document.getElementById("btnRight").className="btn split";
    document.getElementById("btnRight").innerHTML="SPLIT";
}

function setStartBtn() {
    document.getElementById("btnLeft").className="btn start";
    document.getElementById("btnLeft").innerHTML="START";
}

function setResetBtn() {
    document.getElementById("btnRight").className="btn reset";
    document.getElementById("btnRight").innerHTML="RESET";
}



// Start/Stop Button
btnLeft.addEventListener('click', function () {

    if  (document.getElementById("btnLeft").className=="btn start"){
        setStopBtn();
        printTime();
        chronometer.startClick();   
        setSplitBtn();


    }
    else {
        setStartBtn();
        chronometer.stopClick();
        setResetBtn();

    }
    


});

// Reset/Split Button
btnRight.addEventListener('click', function () {

    if  (document.getElementById("btnRight").className=="btn reset"){
        clearSplits();

        chronometer.resetClick();
        
    }
            
    else {
       
        printSplit();

    }

});
