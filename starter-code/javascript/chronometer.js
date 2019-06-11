class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId=''
  }
  startClick=()=>{
    this.intervalId = setInterval(() => {
     this.currentTime += 1
     //console.log(this.currentTime)
    }, 1000)
    
  }
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
  getSeconds() {
    return (this.currentTime%60)
  }
  twoDigitsNumber(time) {
    let timeString = time.toString()    
    if(timeString.length === 1){
      return "0"+ timeString
    }
    return timeString
  }
  stopClick=()=> {
    clearInterval(this.intervalId)
  }
  resetClick() {}
  splitClick() {}
}