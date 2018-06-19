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
  var intervalIdMain = setInterval(function(){
    printMinutes();
    printSeconds();
  },1000);
}

function printMinutes() {
  minDec.innerHTML = chronometer.minutes[0];
  minUni.innerHTML = chronometer.minutes[1];
}

function printSeconds() {
  secDec.innerHTML = chronometer.seconds[0];
  secUni.innerHTML = chronometer.seconds[1];
}


// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.className === "btn start") { // START
    // change classes
    btnLeft.innerHTML = "STOP";
    btnLeft.setAttribute("class", "btn stop");
    btnRight.innerHTML = "SPLIT";
    btnRight.setAttribute("class", "btn split");
    // start and print stuff
    chronometer.startClick(); 
    printTime();
  }
    else { // STOP
    // change classes
    btnLeft.innerHTML = "START";
    btnLeft.setAttribute("class", "btn start");
    btnRight.innerHTML = "RESET";
    btnRight.setAttribute("class", "btn reset");
    // stop
    chronometer.stopClick(); 
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.className === "btn reset") { // RESET
        // clear numbers
        chronometer.resetClick();
        printTime();
        document.getElementById("splits").remove();
    }
    else { //SPLIT
      var node = document.createElement("li");
      getElementById("splits").appendchild(node);
      return 

    }
});
