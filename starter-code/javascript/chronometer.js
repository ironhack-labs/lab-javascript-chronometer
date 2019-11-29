class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.milSeconds = 0;
		this.intervalId;
	}
	startClick() {
		this.intervalId = setInterval(() => {
			this.milSeconds++;
			if (this.milSeconds >= 100) {
				this.currentTime++;
				this.milSeconds = 0;
			}
		}, 10);
	}
	getMinutes() {
		return Math.floor(this.currentTime / 60);
	}
	getSeconds() {
		return this.currentTime % 60;
	}
	getMiliseconds() {
		return this.milSeconds;
	}
	twoDigitsNumber(digit) {
		return digit < 10 ? `0${digit}` : `${digit}`;
	}
	stopClick() {
		clearInterval(this.intervalId);
	}
	resetClick() {
		this.currentTime = 0;
		this.milSeconds = 0;
	}
	splitClick() {
		return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(
			this.getSeconds()
		)}:${this.twoDigitsNumber(this.getMiliseconds())}`;
	}
}
