class Chronometer {
  	constructor() {
		this.currentTime = 0
		this.intervalId = null
  	}
	  

  	start(callback) {
		this.intervalId = setInterval(() => {
			
			this.currentTime++
			if(callback) callback
		},1000)
		return this.intervalId
  	}

  	getMinutes() {
		const minutes = Math.floor(this.currentTime/60)
		return minutes
  	}

 	getSeconds() {
		const seconds = this.currentTime%60
		return seconds
	  }
	  

	computeTwoDigitNumber(value) {
		if (value < 9){
			return "0" + value.toString()
		}
		return value.toString()
  	}

	stop() {
		clearInterval(this.intervalId)
  	}

  	reset() {
		this.currentTime = 0
  	}

  	split() {
		const splitedMinutes = this.getMinutes()
		const splitedSeconds = this.getSeconds()
		const splitedMinutesConverted = this.computeTwoDigitNumber(splitedMinutes)
		const splitedSecondsConverted = this.computeTwoDigitNumber(splitedSeconds)
		return `${splitedMinutesConverted}:${splitedSecondsConverted}`
  	}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
