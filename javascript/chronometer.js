class Chronometer {
  constructor() {
    this.currentTime= 0;
    this.intervalId= 0;

  }
  startClick(callback) {

this.intervalId = setInterval(() => this.currentTime++;
callback()
}, 1000)

}

  getMinutes(currentTime) {
    return (Math.floor(this.currentTime/60))
  }
  getSeconds(currentTime) {
    var minutes= this.getMinutes(currentTime)
    
    return (Math.floor(this.currentTime - (minutes * 60)))
  }
  twoDigitsNumber(currentTime) {
    
     currentTime =  "0" + currentTime       
    return ""+currentTime.slice(-2);
     
   }
  stopClick() {
 clearInterval(this.intervalId)
  }
  resetClick() {
   this.currentTime = 0;
  }
  splitClick() {
    
    var minutes = this.twoDigitsNumber(this.getMinutes(this.currentTime))
    var seconds = this.twoDigitsNumber(this.getSeconds(this.currentTime))

    return   `${minutes}:${seconds}`
  }
}

