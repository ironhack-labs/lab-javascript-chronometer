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
function cleanEverything(){
   minDec.innerText = "0";
   minUni.innerText = "0";
   secDec.innerText = "0";
   secUni.innerText = "0";
}

function printMinutes() {

   let value = chronometer.twoDigitsNumber(chronometer.getMinutes());
   console.log(value);
   let stringValue = value.split("");
   minDec.innerText = stringValue[0];
   minUni.innerText = stringValue[1];
}

function printSeconds() {
   let value = chronometer.twoDigitsNumber((chronometer.getSeconds()) ;
   let stringValue = value.split("");
   secDec.innerText = stringValue[0];
   secUni.innerText = stringValue[1];

}

function printMilliseconds() {
  
}


function printSplit() {
	let minutes = chronometer.getMinutes();
	let seconds = chronometer.getSeconds();
	return `${minutes}:${seconds}`;

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
function clearSplits(){
	let father = document.getElementById("splits");
	let rows = document.getElementsByClassName("listli");
	let size = rows.length;
	for(let i = size-1; i >= 0; i--){
		father.removeChild(rows[i]);
	}
}

function createLi(value){
   let father = document.getElementById("splits");
   let newLi = document.createElement("li");
   newLi.setAttribute("class","listli");
   newLi.innerText = value;
   father.appendChild(newLi);
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
	if (chronometer.status === "stopped"){
		btnLeft.innerText = "STOP";
		chronometer.startClick(printTime);

		btnLeft.setAttribute("class", "btn stop");
	    btnRight.innerText = "SPLIT";
		btnRight.setAttribute("class", "btn split");
	}else{
		btnLeft.innerText = "START";
		btnLeft.setAttribute("class", "btn start");
		chronometer.stopClick();
	    btnRight.innerText = "RESET";
		btnRight.setAttribute("class", "btn reset");
	}
});


btnRight.addEventListener('click', function () {
    	if (chronometer.status === "stopped"){
		chronometer.resetClick();
		cleanEverything();
		clearSplits();
	}else{
	  createLi(printSplit());
	}

});
