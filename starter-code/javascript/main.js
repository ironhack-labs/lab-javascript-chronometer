var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

let interval;

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


btnLeft.innerText= 'START';
btnLeft.classList.remove('stop');
btnLeft.classList.add('start');
clearInterval(interval)

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
btnLeft.innerText= 'STOP';
btnLeft.classList.remove('start');
btnLeft.classList.add('stop');


chronometer.startClick()
 interval = setInterval(()=>{printTime()},1000)



}

function setResetBtn() {

btnRight.innerText= 'SPLIT';
btnRight.classList.remove('start');
btnRight.classList.add('split');


}


// Start/Stop Button
btnLeft.addEventListener('click', function () {


	   if(btnLeft.innerText === 'START'){
        setStartBtn()

    } else {
        setStopBtn()
    }

})


// Reset/Split Button
btnRight.addEventListener('click', function () {

});

