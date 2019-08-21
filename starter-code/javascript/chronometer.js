class Chronometer {
  constructor() {
    this.intervalId;
    this.currentTime=0
    this.milliSeconds =0
    this.milliInterval =0
  }

  startClick(){
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000)
    this.milliInterval = setInterval(()=>{
      this.milliSeconds ++
    }, 1)    
  }
  getMinutes() {
   return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    return this.currentTime %60 
  }

  getMilliSeconds(){
    return this.milliSeconds % 100
  }
  twoDigitsNumber(value) {
    if(value<10){
      return '0'+ value.toString()
    }
    else{
      return value.toString()
    }
  }
  stopClick() {
    clearInterval(this.intervalId)
    clearInterval(this.milliInterval)
  }
  resetClick() {
    this.currentTime = 0
    this.milliSeconds = 0
  }
  //splitClick() {}
}