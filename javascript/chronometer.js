class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.miliseconds = 0;
  }

  startClick(callback) {
		this.intervalId = setInterval(() => {
			this.currentTime++
    }, 1000)
    
    // Miliseconds interval
    this.intervalMilId = setInterval(() => {
			this.miliseconds++
			if (this.miliseconds === 100){
				this.miliseconds = 0;
			}
		}, 1)
		
		if (callback !== undefined){
			callback()
		}
  }

  getMinutes() {
    return Math.trunc(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime - this.getMinutes() * 60
  }

  getMilliseconds() {
    return this.miliseconds
  }

  twoDigitsNumber(n) {
    if (n < 10){
      return `0${n}`
    } else {
      return `${n}`
    }
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0
  }

  splitClick() {
    return this.twoDigitsNumber(this.getMinutes())+':'+this.twoDigitsNumber(this.getSeconds())
  }
}
