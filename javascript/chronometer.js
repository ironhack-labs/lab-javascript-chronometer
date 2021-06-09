class Chronometer {
  constructor() {

    this.currentTime =0
    this.intervalId=null

   
  }

  start() {
    this.intervalId = setInterval(() => {
      this.currentTime+=1
     
    }, 1000);
   
  }

  getMinutes() {
   
   
      return Math.floor(this.currentTime/60)
     
    
    
    
   
  }

  getSeconds() {

   

      return this.currentTime%60
    
   
  

   
  }

  computeTwoDigitNumber(value) {

    
   if(value<10){
    //  return '0'+(this.currentTime%60).toString()
     return'0'+(value%60).toString()
   }
   else{
     return (value%60).toString()
   }
    
    
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime=0
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes())+":"+this.computeTwoDigitNumber(this.getSeconds())
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
