class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.milliseconds = 0;
		this.intervalId;
	}
	startClick() {
		this.intervalId = setInterval(() => {
			this.milliseconds++;
			if (this.milliseconds >= 100) {
				this.currentTime++;
				this.milliseconds = 0;
			}
		}, 10);
	}
	getMinutes() {
		return Math.floor(this.currentTime / 60);
	}
	getSeconds() {
		return this.currentTime % 60;
	}
	getMilliseconds() {
		return this.milliseconds;
	}
	twoDigitsNumber(digit) {
		return digit < 10 ? `0${digit}` : `${digit}`;
	}
	stopClick() {
		clearInterval(this.intervalId);
	}
	resetClick() {
		this.currentTime = 0;
		this.milliseconds = 0;
	}
	splitClick() {
		let m = this.twoDigitsNumber(this.getMinutes());
		let s = this.twoDigitsNumber(this.getSeconds());
		let ms = this.twoDigitsNumber(this.getMilliseconds());
		return `${m}:${s}:${ms}`;
	}
}
