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



		splitList.appendChild(li)
	}

function clearSplits() {

}

function setStopBtn() {
	setResetBtn()
btnLeft.innerText= 'STOP';
btnLeft.classList.remove('start');
btnLeft.classList.add('stop');
btnLeft.removeEventListener('click',onmousedown, true);
btnLeft.addEventListener('click',(e)=>{
	clearInterval(initian)

})



}

function setSplitBtn() {
let digtisM = chronometer.twoDigitsNumber(chronometer.getMinutes())
let digtisS = chronometer.twoDigitsNumber(chronometer.getSeconds())
console.log(digtisM);
let splitList  = document.getElementById('splits')
		let li = document.createElement('li');
		li.innerHTML = `${digtisM} : ${digtisS}`

		printSplit()


}

function setStartBtn() {

	chronometer.startClick()
	setStopBtn()
	let initian = setInterval(printTime,1000);
}

function setResetBtn() {

btnRight.innerText= 'SPLIT';
btnRight.classList.remove('start');
btnRight.classList.add('split');


}


// Start/Stop Button
btnLeft.addEventListener('click', function () {


	setStartBtn()

})


// Reset/Split Button
btnRight.addEventListener('click', function () {

});

