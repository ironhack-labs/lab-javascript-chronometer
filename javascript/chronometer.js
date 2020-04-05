class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.intervalId = 0;

		// ... your code goes here
	}
	startClick(callback) {
		this.intervalId = setInterval(() => {
			this.currentTime = this.currentTime + 1;	
			if (callback){
				callback();
			}
		}, 1000);
		// ... your code goes here
	}
	getMinutes() {
		let minutes = Math.floor(this.currentTime / 60);
		// console.log(minutes);
		return minutes;
		// ... your code goes here
	}
	getSeconds() {
		let seconds = this.currentTime - this.getMinutes() * 60;
		return seconds;
		// ... your code goes here
	}
	twoDigitsNumber(number) {
		if (number.toString().length === 1) {
			return `0${number.toString()}`;
		} else {
			return `${number.toString()}`;
		}
		// ... your code goes here
	}
	stopClick() {
		clearInterval(this.intervalId);
		// ... your code goes here
	}
	resetClick() {
		this.currentTime = 0;

		// ... your code goes here
	}
	splitClick() {
		let splitSeconds = this.twoDigitsNumber(this.getSeconds());
		let splitMinutes = this.twoDigitsNumber(this.getMinutes());
		return `${splitMinutes}:${splitSeconds}`;
		// ... your code goes here
	}
}
