class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(() => this.currentTime+=1, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
  getSeconds() {
    return this.currentTime%60
  }

  getMilliseconds(){
  	return this.currentTime%100
  }


  twoDigitsNumber(num) {
    num=num.toString()
    if(num.length == 1)
    	num = '0'+num
    return num
  }
  stopClick() {
    clearInterval(this.intervalId) 
  }
  resetClick() {
	    this.currentTime = 0
  }
  splitClick() {
  	let min = this.getMinutes()
  	let sec = this.getSeconds()
    if (min<10)
    	return `${0}${min}:${0}${sec}`
    return `${min}:${sec}`	
    
  }
}

