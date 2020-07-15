class Chronometer {
  constructor() {  //should not receive any arguments
    this.currentTime = 0; //stablish the currentTime property
    this.intervalId = 0; //Stablish the intervalID property
  }
  startClick(callback) { //if every second currentTime increment by one, every 3 seconds it will increment by 3
    let intervalId = setInterval(() => {
			this.currentTime++;
		}, 1000);
	}
   
  getMinutes() {
    return Math.floor(this.currentTime / 60);  //i used math.floor for return a number without decimals.
    }

  getSeconds() {
    return Math.floor(this.currentTime % 60);  //i used math.floor for return a number without decimals.
    }

  twoDigitsNumber() {
    return ("0" + this.currentTime).slice(-2);
  }

  stopClick() {
    return clearInterval (this.currentTime);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
	}
}
