class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.intervalId = 0;
	}

	startClick(callback) {
		this.intervalId = setInterval(() => this.currentTime++, 1000);
	}
	getMinutes() {
		return Math.floor(this.currentTime / 60);
	}
	getSeconds() {
		return this.getMinutes() === 0
			? this.currentTime
			: Math.floor((this.currentTime / 60 - this.getMinutes()) * 60);
	}
	twoDigitsNumber(time) {
		return time === 0 ? "00" : time > 0 && time < 10 ? "0" + time : "" + time;
	}
	stopClick() {
		clearInterval(this.intervalId);
	}
	resetClick() {
		this.currentTime = 0;
	}
	splitClick() {
		return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
	}
}
