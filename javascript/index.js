const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');







function printTime() {
	// printMinutes(chronometer.constructor.this.currentTime)

	printSeconds()

}



function printMinutes() {
	// ... your code goes here
	let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes)
	console.log(typeof(minutes))
}

function printSeconds() {
	// ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
	// ... your code goes here
}

function printSplit() {
	// ... your code goes here
}

function clearSplits() {
	// ... your code goes here
}

function setStopBtn() {
	
	
}

function setSplitBtn() {
	// ... your code goes here
}

function setStartBtn() {
	// console.log(chronometer.start(chronometer.getSeconds(chronometer.computeTwoDigitNumber)));
	// // chronometer.start()
	let hola = chronometer.start(printTime);
	console.log(hola);



}

function setResetBtn() {
	// ... your code goes here
}




// Start/Stop Button


btnLeftElement.addEventListener('click', () => {
	// item.removeAttribute('')
	setStartBtn()
	//si está en modo stop
	if (btnLeftElement.classList.contains('stop')){
		btnLeftElement.classList.remove('stop')
		btnLeftElement.classList.add('start')
		btnLeftElement.textContent = ('START')
		btnRightElement.classList.remove('split')
		btnRightElement.classList.add('reset')
		btnRightElement.textContent = ('RESET')

		
	}
	//si está en modo start
	else if (btnLeftElement.classList.contains('start')){
		btnLeftElement.classList.remove('start')
		btnLeftElement.classList.add('stop')
		btnLeftElement.textContent = ('STOP')
		btnRightElement.classList.remove('reset')
		btnRightElement.classList.add('split')
		btnRightElement.textContent = ('SPLIT')


	}

})

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

	console.log(chronometer.super.this.currentTime);
	// if (btnLeftElement.classList.contains('stop')){
	// 	btnRightElement.classList.remove('reset')
	// 	btnRightElement.classList.add('split')
	// }
	// else if (btnLeftElement.classList.contains('start')){
	// 	btnRightElement.classList.remove('split')
	// 	btnRightElement.classList.add('reset')
	// }





});