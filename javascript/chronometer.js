class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.intervalId = 0;
	}
	startClick(callback) {
		this.intervalId = setInterval(() => {
			this.currentTime += 1;
		}, 1000);
	}

	getMinutes() {
		this.currentTime = Math.floor(this.currentTime / 60);
		return this.currentTime;
	}
	getSeconds() {
		if (this.currentTime < 59) {
			return this.currentTime;
		} else {
			return this.currentTime % 60;
		}
	}

	twoDigitsNumber() {
		var numberToString = this.currentTime.toString();

		for (let i = 0; i < numberToString.length; i++) {
			if (numberToString.length === 1) {
				return 0 + numberToString;
			} else if (numberToString.length === 2) {
				return numberToString;
			} else {
				return 0;
			}
		}
	}

	stopClick() {
		clearInterval(this.intervalId);
	}

	resetClick() {
		this.currentTime = 0;
	}

	splitClick() {
		let time = this.currentTime;
		time = `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
		return time;
	}
}
