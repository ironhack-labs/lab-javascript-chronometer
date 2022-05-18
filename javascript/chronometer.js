class Chronometer {
  constructor() {
    this.currentTime=0
    this.intervalId=null
  }

  start(callback) {
   if (!callback){
    if (!this.intervalId){
      this.intervalId = setInterval((callback)=>{
        this.currentTime++
      },1000)
    }
   }else {
    if (!this.intervalId){
      this.intervalId = setInterval(()=>{
        this.currentTime++
      },1000)
    }
   }
  }

  getMinutes() {
    if (this.currentTime>60)
    return Math.floor(this.currentTime/60);
    else if (this.currentTime===60)
      return 1; 
    else return 0;
  }

  getSeconds() {
    if (this.currentTime>=60)
    return this.currentTime%60;
    else if (this.currentTime===60)
    return 0; 
    return this.currentTime;
  }

  computeTwoDigitNumber(value) {
    if (value>9)
    return value.toFixed().slice()
      else {
    let string = ""
    string = value.toFixed().slice();
    return `0${string}`}
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }

  reset() {
    this.currentTime=0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

const crono = new Chronometer()
crono.start();

setInterval(() =>{
  console.log(crono.split())
},1000)

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
