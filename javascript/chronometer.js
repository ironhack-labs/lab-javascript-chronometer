class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.intervalId = null;
	}

	start(callback, callback2) {
		this.intervalId = setInterval(() => {
			if (callback) {
				callback();
			}
			this.currentTime++;
		}, 1000);

		// this.millisecondInterval = setInterval(() => {
		// 	if (callback2) {
		// 		callback2();
		// 	}
		// 	this.currentTimeMilliseconds++;
		// }, 10);
	}

	getMinutes() {
		return Math.floor(this.currentTime / 60);
	}

	getSeconds() {
		// ... your code goes here
		return this.currentTime % 60;
	}

	// getMilliseconds() {
	// 	return this.currentTimeMilliseconds % 60;
	// }

	computeTwoDigitNumber(value) {
		// ... your code goes here
		return value < 10 ? `0${value}` : `${value}`;

		// if(value < 10){
		//   return `0${value}`;
		// }else{
		//   return `${value}`
		// }
	}

	stop() {
		// ... your code goes here
		clearInterval(this.intervalId);
	}

	reset() {
		// ... your code goes here
		return (this.currentTime = 0);
	}

	split() {
		// ... your code goes here
		// let random = this.computeTwoDigitNumber(this.getMinutes());

		// let random2 = this.computeTwoDigitNumber(this.getSeconds());

		// return random + ':' + random2;

		return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
	}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
	module.exports = Chronometer;
}
