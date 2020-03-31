class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.intervalId = 0;
	}
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      
    callback()  
		}, 1000);
	}

	getMinutes() {
		return Math.floor(this.currentTime / 60);
	}

  getSeconds() {
   return this.currentTime % 60
  }
  
	twoDigitsNumber() {
    return this.currentTime = "00"
	}
	stopClick() {
    clearInterval(this.intervalId)
	}
	resetClick() {
    return this.currentTime = 0
	}
	splitClick() {
      let min = this.getMinutes();
      let sec = this.getSeconds();
      if (min < 10) {
        return `${0}${min}:${0}${sec}`;
      } else {
        return `${min}:${sec}`;
      }
	}
}
