class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.intervalId = this.startClick();
	}
	startClick() {
		return setInterval(() => {
			this.currentTime++;
		}, 1000);
	}
	getMinutes() {
		return Math.floor(this.currentTime / 60);
	}
	getSeconds() {
		return this.currentTime % 60;
	}
	twoDigitsNumber(digit) {
		return digit < 10 ? `0${digit}` : `${digit}`;
	}
	stopClick() {
		clearInterval();
	}
	resetClick() {
		this.currentTime = 0;
	}
	// splitClick() {}
}
