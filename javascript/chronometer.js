class Chronometer {
  constructor() {
     this.currentTime = 0;
     this.intervalId = null;
  }
  //aqui obtenemos los segundos
  start() {
    const chrono = ()=> {
      this.currentTime++;
     } 
     this.intervalId = setInterval(chrono, 1000);
  }
  
  getMinutes() {
   if (this.currentTime >= 60 ){
    return Math.floor(this.currentTime / 60);
   }
     return 0;
  }

  getSeconds() {
    return this.currentTime % 60;
    
  }

  computeTwoDigitNumber(value) {
    if( value <= 10){
      return `0${value}`;
    }else{
      return `${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);//detiene el intervalo de tiempo
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
  let min =  this.computeTwoDigitNumber(this.getMinutes());
  let seg =  this.computeTwoDigitNumber(this.getSeconds());
  return  `${min}:${seg}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
