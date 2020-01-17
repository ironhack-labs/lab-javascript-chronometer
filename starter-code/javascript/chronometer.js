class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.intervalId;
	}

	startClick() {
		this.intervalId = setInterval(
			function() {
				this.currentTime++;
				console.log("currentTime");
			}.bind(this),
			1000
		);
	}

	getMinutes() {
		return Math.floor(this.currentTime / 60);
	}

	getSeconds() {
		console.log("Seconds: " + Math.floor(this.currentTime % 60));
		return Math.floor(this.currentTime % 60);
	}

	twoDigitsNumber(value) {
		let stringValue = value.toString();
		value = value.toString();

		if (stringValue < 9) {
			stringValue = "0" + stringValue;
			// console.log("stringValue " + stringValue);
			return stringValue;
		} else {
			// console.log("value " + value);
			return value;
		}
	}
	stopClick() {
		clearInterval(this.intervalId);

		//return this.intervalId;
	}
	resetClick() {
		this.currentTime = 0;
	}

	// splitClick() {}
}
