class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;

  }
  startClick(callback) {
    setInterval(()=>{
      this.currentTime++
    },1000)
 
  }
  getMinutes() {
    const minutes =  Math.floor(this.currentTime/60);
    return minutes;

  }
  getSeconds() {
    return this.currentTime%60;
  }
  twoDigitsNumber(elem) {
  //  return ('0' + elem).slice(-2)
  if (elem<10){
    elem = "0" +elem
  } else{
    elem =elem 
  }
  return elem
  }


 stopClick() {
    clearInterval()
  }
  resetClick() {
    this.currentTime = 0
    
  }
  splitClick() {
    let splitMinutes = this.twoDigitsNumber(this.getMinutes())
    let splitSeconds = this.twoDigitsNumber(this.getSeconds())
    return splitMinutes + ":"+ splitSeconds
  }
}
