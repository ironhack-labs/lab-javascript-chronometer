function Chronometer() {
  this.currentTime = 0
  this.intervalId = 0

  this.startClick = function() {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000)
  }
  this.getMinutes = function(){
    const minutes = Math.floor(this.currentTime/60)
    return minutes
  }
  this.getSeconds= function(){
    const seconds = Math.floor(this.currentTime % 60)
    return seconds
  }
  this.twoDigitsNumber = function(num){
    if(num<10){
      let str = `0` + `${num}`
      return str
    } else {
      return num.toString()
    }
  }
  this.stopClick = function(){
    clearInterval(this.intervalId)
  }
  this.resetClick = function(){
    this.currentTime = 0
  }
  // splitClick() {}
}