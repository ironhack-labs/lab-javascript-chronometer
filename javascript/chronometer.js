class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime =0
    this.intervalId = null
  }

  start(callback) {
    // ... your code goes here
    this.intervalId= setInterval(() => {
      this.currentTime+=1;
    
     
      if (this.current > 3) {
        clearInterval(this.intervalId);
      }
    }, 1000);
    
  }  

  /*start(callback) {
    if (!callback){
      this.intervalId = setInterval(()=>this.currentTime++,1000);
    } else {
      this.intervalId = setInterval(()=>this.currentTime++,1000);
      callback();
    }
  }*/

  

  getMinutes() {
    // ... your code goes here
    let num = (Math.floor(this.currentTime/60))
    
    return num
  }

  getSeconds() {
    // ... your code goes here
    if(this.current === 0){
      return 0
    }else if(this.current <=9){
      //this.current = 0 + this.currentTime
    }
      return this.currentTime % 60
    
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let a= value.toString();
    if( value <= 9){
      return `0${a}`
    }else{
      return a
    }

  }

  stop() {
    // ... your code goes here
    return clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let a = this.computeTwoDigitNumber(this.getMinutes())
    let a1 = Number(this.computeTwoDigitNumber(this.getMinutes()))
    let b= this.computeTwoDigitNumber(this.getSeconds())
    let b1= Number(this.computeTwoDigitNumber(this.getSeconds()))

    /*if(b1>60){
      let b1a = "00"
      let sum  = a1 + 1
      let sum1 = `0${sum}`
      return `0${sum}:${b1a}`

    }else{
      return `${a}:${b}`

    }*/
    return `${a}:${b}`

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
