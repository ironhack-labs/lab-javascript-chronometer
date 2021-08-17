class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.intervalId = null;
		this.currentTimeMilliseconds = 0;
		this.millisecondIntervalId = null;
	}

	start(callback) {
		this.intervalId = setInterval(() => {
			if (callback) {
				callback();
			}
			this.currentTime++;
		}, 1000);

		//el de arriba si le pongo 10 en lugar de 1000 me pone milisegundos en los segundos del reloj, algo parecido ha de funcionar para los ms
		// faltaba declarar otro intervalo y currenttime para los milisegundos, daba NAN porqué me devolvia undefined
		this.millisecondIntervalId = setInterval(() => {
			if (callback) {
				callback();
			}
			this.currentTimeMilliseconds++;
		}, 10);
	}

	getMinutes() {
		return Math.floor(this.currentTime / 60);
	}

	getSeconds() {
		// ... your code goes here
		return this.currentTime % 60;
	}

	getMilliseconds() {
		return this.currentTimeMilliseconds % 60;
	}

	computeTwoDigitNumber(value) {
		// ... your code goes here
		return value < 10 ? `0${value}` : `${value}`;

		// if(value < 10){
		//   return `0${value}`;
		// }else{
		//   return `${value}`
		// }
	}

	stop() {
		// ... your code goes here
		clearInterval(this.intervalId);
		clearInterval(this.millisecondIntervalId);
	}

	reset() {
		// ... your code goes here
		return (this.currentTime = 0);
	}

	split() {
		// ... your code goes here
		// let random = this.computeTwoDigitNumber(this.getMinutes());

		// let random2 = this.computeTwoDigitNumber(this.getSeconds());

		// return random + ':' + random2;

		return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
	}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
	module.exports = Chronometer;
}
