class Chronometer {
  constructor() {
    this.currentTime = 0
  } 
  startClick(){
      let cronObj = this
      this.intervalId = setInterval(function(){
        cronObj.currentTime += 1
      },10)
    }

  getMinutes() {
    return Math.floor(this.currentTime/6000)
  }
  getSeconds() {
    return (Math.floor(this.currentTime/100)%60)
  }
  getMilSeconds() {
    return Math.floor(this.currentTime%100)
  }
  twoDigitsNumber(number) {
    return (number<10 ? `0` : '') + number
  }
  stopClick() {
    return clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime=0
  }





}