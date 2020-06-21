class Chronometer {
	constructor() {
		this.currentTime=0;
		this.intervalId=0;
	}
	startClick(callback) {
		this.intervalId = setInterval(callback, 1000);
	}
	getMinutes() {
    return Math.floor(this.currentTime / 60); 
	}
	getSeconds() {
    return this.currentTime % 60; 
	}
	twoDigitsNumber(number) {
	return number.toString().length === 1? `0${number}` : `${number}`
	}
	stopClick() {
		clearInterval(this.intervalId)
	}
	resetClick() {
		this.currentTime = 0;
	}
	splitClick(minutes, seconds) {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
	}
}