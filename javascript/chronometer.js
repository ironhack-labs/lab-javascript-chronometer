class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=null;
  }

  start(callback) {
     if(callback===undefined){
            const intervalId= setInterval(()=>{
            this.currentTime+=1;
            
            },1000);
            this.intervalId=intervalId; 
            } 
            else {
            const intervalId= setInterval(()=>{
            this.currentTime+=1;
            callback; 
            },1000); 
            this.intervalId=intervalId;
          }
 }

  getMinutes() {
    let a=this.currentTime;
    return a>=60?Math.floor(a/60):0
     }

  getSeconds() {
    let a=this.currentTime;
    return a<60?a:a%60;    
  }

  computeTwoDigitNumber(value) {
    let twoDigits=value.toString();
    return value>9?twoDigits:'0'+value;
    }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime=0;
  }

  split() {
    let sec=this.computeTwoDigitNumber(this.getSeconds());
    let min=this.computeTwoDigitNumber(this.getMinutes());
    return `${min}:${sec}`
  }
}

let newChrono = new Chronometer;



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
