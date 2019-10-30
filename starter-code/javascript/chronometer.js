class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.intervalId;
	}
	startClick() {
		this.intervalId = setInterval(() => {
			this.currentTime++;
		}, 1000);
	}
	getMinutes() {
		return this.intervalId === 0 ? 0 : Math.floor(this.currentTime / 60);
	}
	getSeconds() {
		return this.intervalId === 0 ? 0 : this.currentTime % 60;
	}
	twoDigitsNumber(value) {
		return value < 10 ? `0${value}` : `${value}`;
	}
	stopClick() {
		clearInterval(this.intervalId);
	}
	resetClick() {
		this.currentTime = 0;
	}
	splitClick() {
		let time = `${this.getMinutes} : ${this.getSeconds}`;
	}
}
