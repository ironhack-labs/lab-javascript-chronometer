class Chronometer {
  constructor() {
    this.currentTime = 0; 
    this.intervalId = null
  }

  start(callback) {

   /*no sigas leyendo el codigo si no hay un callback de la funcion; en caso de que 
   haya start callback llama el interval ID que luego me representará el currentTime*/

     if (callback){
      return intervalId
     }
   
    this.intervalId= setInterval (() => {
      return this.currentTime++ 
    }, 1000)
  }

  getMinutes() {
   let minutes = Math.floor(this.currentTime / 60)
  return minutes
  }

  getSeconds() {
    let seconds = this.currentTime % 60 
    let secnd = Math.ceil (seconds)
    return secnd
  }

  computeTwoDigitNumber(value) {

    const twoDigits = value < 10 ? "0" + value : value.toString()
    return twoDigits 
     
   /* if (this.getMinutes()< 10 ) {
      return "0" + this.getMinutes()
    }
    
    if (this.getMinutes ()> 10 ){
      return this.getMinutes.toString()
    }

    if (this.getSeconds () < 10 ){
      return "0" + this.getSeconds()
    }
    if (this.getSeconds ()> 10 ){
      return this.getSeconds.toString()
    }
    return computeTwoDigitNumber(value) */
    
    /*let strMinutes = num.ToString(getMinutes).slice(-2)
    let strSecond = num.ToString (getSeconds) .slice (-2)*/

    
    /*let finalTime = `${twoDigitsMinutes} : ${twoDigitsSeconds}`
    return finalTime */
    
  }

  stop() {
    return clearInterval (this.intervalId)
    
  }

  reset() {
    return this.currentTime = 0 
  }

  split() {
    const currentMinutes = this.getMinutes(this.currentTime);
    const currentTwoDigitsMinutes = this.computeTwoDigitNumber(currentMinutes);

    const currentSeconds = this.getSeconds(this.currentTime);
    const currentTwoDigitsSeconds = this.computeTwoDigitNumber(currentSeconds);
    
    return `${currentTwoDigitsMinutes}:${currentTwoDigitsSeconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
