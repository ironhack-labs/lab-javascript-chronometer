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
		console.log("Hoooooooli");



}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {

let digtisM = chronometer.twoDigitsNumber(chronometer.getMinutes())
let digtisS = chronometer.twoDigitsNumber(chronometer.getSeconds())

let splitList  = document.getElementById('splits')
		let li = document.createElement('li');
		li.innerHTML = `${digtisM}: ${digtisS}`

		splitList.appendChild(li)





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
	printTime();
	btnLeft.style.background ='red'
	btnLeft.innerText ='STOP'

	btnRight.style.background ='blue'
	btnRight.innerText = 'SPLIT'
	printSplit()

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});


console.log();