function Chronometer() {
  this.currentTime=0
  this.intervalId=0
  this.startClick=function() {
    this.intervalId = setInterval( () => {
      return this.currentTime++
    },1000)
  }
  this.getMinutes = function() {
    const minutes = Math.floor(this.currentTime/60)
    return minutes;
  }
  this.getSeconds= function (){
    if (this.currentTime < 60){
      return this.currentTime
    } else{
      const restingSec = Math.floor(this.currentTime%60)
      return restingSec
    }
  }
  this.twoDigitsNumber = function(value) {
    if (value == 0){
      return `00`
    } else if (value < 10){
      return `0${value}`
    } else{
      return `${value}`
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