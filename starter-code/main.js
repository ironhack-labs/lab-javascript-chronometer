var countDownNumber = 0;

var startButton = document.getElementById('btnLeft');
var stopButton = document.getElementById('btnRight');

var numberArea1 = document.getElementById('minDec');
var numberArea2 = document.getElementById('minCen');
var numberArea3 = document.getElementById('secDec');
var numberArea4 = document.getElementById('secCen');
//--------------------------------------------

// Event Handlers
startButton.onclick = startCountDown;
//--------------------------------------------

// Object 
var cycleAreas = {
	area1: numberArea1,
	area2: numberArea2,
	area3: numberArea3,
	area4: numberArea4
};




function startCountDown() {
	console.log(' Start Count Down - test');


	startIntervalOn( numberArea1 );
	startIntervalOn(  );
}

for (var k=0; k > cycleAreas.length; k++ ){
	var result = cycleAreas.area[k];
console.log( result );
}

// for ( var key in cycleAreas ) {
//  	 	var result = cycleAreas[key];
//  	 	console.log(result);
//  	}





//--------------------------------------------

// Modular Functions 

function startIntervalOn(WhichNumberArea) {
	setInterval( function () {
		console.log('Start Interval - test');
		countDownNumber++;
		WhichNumberArea.innerHTML = countDownNumber;
		activateNextDigit(countDownNumber);
		stayOneDigit();
	}, 1000);
}

function stayOneDigit() {
	if ( countDownNumber >= 9 ) {
		console.log('Stay ONE Digit Check - test');
		countDownNumber = 0;
	}
}

function activateNextDigit(countDownNumber) {
	if ( countDownNumber === 9 ) {
		console.log('Activate Next Digit - test');
		
		evalAreaNumber();
	}
}

// function evalAreaNumber() {
	
// 	for ( var key in cycleAreas ) {
// 	 	var result = cycleAreas[key];
// 	}
// 	return result;
// 	console.log( 'Eval Area Number - test' );
// }

// console.log( evalAreaNumber() );
//--------------------------------------------

 
//numberArea[i] 1-4 



