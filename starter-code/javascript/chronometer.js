class Chronometer {
  constructor(){
    this.currentTime = 0
    this.intervalId = 0 
  }
  startClick() {
    this.intervalId = setInterval(()=>{this.currentTime+=1},1000) 
  }
  
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
  getSeconds() {
    return this.currentTime - (this.getMinutes(this.currentTime)* 60) // Stolen from Andre, check!!
  }
  twoDigitsNumber(number) {
    if (number.toString().length == 1){
      return "0"+number
    }else{
      return number.toString()
    }
  }

  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    
  }
}


