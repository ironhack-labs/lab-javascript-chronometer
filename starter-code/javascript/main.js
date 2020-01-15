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
let digitssM = chronometer.twoDigitsNumber(chronometer.getMinutes())

printSeconds()
printMinutes()
					


}

function printMinutes() {
	let digitssM = chronometer.twoDigitsNumber(chronometer.getMinutes())
minDec.innerText = digitssM[0]
minUni.innerText = digitssM[1]


}

function printSeconds() {
let digtisS = chronometer.twoDigitsNumber(chronometer.getSeconds())
	
secUni.innerText = digtisS[1];
secDec.innerText = digtisS[0];


}

function printMilliseconds() {

}

function printSplit() {

chronometer

let digtisM = chronometer.twoDigitsNumber(chronometer.getMinutes())
let digtisS = chronometer.twoDigitsNumber(chronometer.getSeconds())
console.log(digtisM);
let splitList  = document.getElementById('splits')
		let li = document.createElement('li');
		li.innerHTML = `${digtisM}: ${digtisS}`

		splitList.appendChild(li)





}

function clearSplits() {

}

function setStopBtn() {
		btnLeft.style.background ='red'
	btnLeft.innerText ='STOP'

}

function setSplitBtn() {

}

function setStartBtn() {

	chronometer.startClick()
	setInterval(printTime,1000);




/*		btnLeft.style.background ='green'
	btnLeft.innerText ='START'*/





}

function setResetBtn() {

	btnRight.style.background ='blue'
	btnRight.innerText = 'SPLIT'


}


// Start/Stop Button
btnLeft.addEventListener('click', function () {


	setStartBtn()

})


// Reset/Split Button
btnRight.addEventListener('click', function () {

});

