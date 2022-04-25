

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null; 
  }

  start(callback) {

    this.intervalId=setInterval(()=>{
      (this.currentTime +=1)
     },1000)

   
  }

  getMinutes() {
    let minutos = 0;

    minutos = this.currentTime / 60;
    minutos = Math.floor(minutos);
    minutos = minutos.toFixed(0);
 
    return Number(minutos)
   
  }

  getSeconds() {
    // ... your code goes here
    let totalSeconds=this.getMinutes()*60;

    let portSeconds= this.currentTime-totalSeconds

    return portSeconds

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    var croSegunds= value;

    if (croSegunds < 10){
    return (croSegunds = '0' + croSegunds.toFixed(0))
  }
  else if (croSegunds >= 10){
    return(croSegunds= croSegunds.toFixed(0))
  }
  }

  stop() {
    let interval =this.intervalId;
    return clearInterval(interval)
  }

  reset() {
    this.currentTime=0
  }

  split() {
    let tSeconds= this.computeTwoDigitNumber(this.getSeconds());
    let tMinutes=this.computeTwoDigitNumber(this.getMinutes());
  
    return tMinutes + ':' + tSeconds;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
