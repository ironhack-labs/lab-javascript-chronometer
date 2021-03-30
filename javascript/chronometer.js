class Chronometer {
	constructor() {
		this.currentTime = 0
		this.intervalId = 0
	}

	startClick(printTime) {
		this.intervalId = setInterval(() => {
			this.currentTime++;
			printTime();
		}, 1000);
	}

	getMinutes() {
		return Math.floor(this.currentTime / 60);
	}

	getSeconds() {
		if (this.currentTime === 0) {
			return 0;
		}

		return Math.floor(this.currentTime % 60);
	}

	twoDigitsNumber(number) {
		if (number < 10) {
			return "0" + number;
		} else {
			return `${number}`;
		}

	}

	stopClick() {
		clearInterval(this.intervalId);

	}
	resetClick() {
		this.currentTime = 0;

	}
	splitClick() {
		let minutes = this.getMinutes();
		let seconds = this.getSeconds();

		minutes = this.twoDigitsNumber(minutes);
		seconds = this.twoDigitsNumber(seconds);

		return `${minutes}:${seconds}`
	}
}
