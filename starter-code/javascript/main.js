var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');


// Start/Stop Button
btnLeft.addEventListener('click', function () {
	let intervalId = setInterval(() => {
		printTime()
	}, 10)

	if (document.getElementById('btnLeft').className === 'btn start') {
		btnLeft.innerHTML = 'STOP'
		btnLeft.className = 'btn stop'
		btnRight.innerHTML = 'SPLIT'
		btnRight.className = 'btn split'
		chronometer.startClick()
		printTime()

	} else {
		btnLeft.innerHTML = 'START'
		btnLeft.className = 'btn start'
		btnRight.innerHTML = 'RESET'
		btnRight.className = 'btn reset'
		chronometer.stopClick()
		clearInterval(intervalId)
	}
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

	if (document.getElementById('btnLeft').className === 'btn start') {
		setResetBtn()
	} else {
		printSplit()
	}
});


function printTime() {
	printMinutes()
	printSeconds()

}

function printMinutes() {
	minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
	minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
}

function printSeconds() {
	secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
	secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
}

function printMilliseconds() {
	console.log('printMilliseconds')
}

function printSplit() {
	const liSplit = document.createElement('li')
	const parentSplit = document.getElementById('splits')

	liSplit.innerHTML = `${chronometer.twoDigitsNumber(chronometer.getMinutes())}: ${chronometer.twoDigitsNumber(chronometer.getSeconds())}`
	parentSplit.appendChild(liSplit)

}

function clearSplits() {
	console.log('clearSplits')

}

function setStopBtn() {
	chronometer.startClick()
	console.log('setStopBtn')
}

function setSplitBtn() {
	printSplit()
}

function setStartBtn() {
	chronometer.startClick()
}

function setResetBtn() {
	chronometer.resetClick()
}