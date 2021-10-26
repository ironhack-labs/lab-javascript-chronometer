class Chronometer {
	constructor() {
		
		this.currentTime = 0;
		this.intervalId = null;
	}

	start() {
		
		this.intervalId = setInterval(() =>{
			this.currentTime+= 1;
		}, 1000);
		
	}

	getMinutes() {
		return parseFloat((Math.floor(this.currentTime / 60)).toFixed());
	}

	getSeconds() {
		return parseFloat((this.currentTime % 60).toFixed());
	}

	computeTwoDigitNumber(value) {
		return value.toFixed().padStart(2,'0')
	}

	stop() {
		clearInterval(this.intervalId);
	}

	reset() {
		this.currentTime = 0;
	}

	split() {
		let splitTime = this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds());
		return splitTime;
	}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
	module.exports = Chronometer;
}
