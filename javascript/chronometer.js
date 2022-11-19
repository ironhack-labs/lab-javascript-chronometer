class Chronometer {
  constructor() {
    this.currentTime = 0; 
    this.intervalId = null
    this.miliseconds = 0;
  }

  start(callback) {

   /*no sigas leyendo el codigo si no hay un callback de la funcion; en caso de que 
   haya start callback llama el interval ID que luego me representará el currentTime*/

     if (!callback){
      return ;
     }
   
    this.intervalId= setInterval (() => {
      this.miliseconds ++ ;

      if (this.miliseconds === 99){
        this.currentTime ++;
        this.miliseconds = 0; // --- > reseteo el intervalo al cero una vez que se suma el segundo en el currentTime++
      }
callback ();
    } , 10) ;
  }

     /* funcion de primer lab  
     this.currentTime++ ;
      callback (); //--> esto es lo que me pinta cosas en el DOM
      return this.currentTime;
      }, 1000) // tengo que ejecutar cada decima de segundo si quiero hacer los milisengudos
  }*/

  getMinutes() {
   let minutes = Math.floor(this.currentTime / 60)
  return minutes
  }

  getSeconds() {
    let seconds = this.currentTime % 60 
    let secnd = Math.ceil (seconds)
    return secnd
  }
  
  getMiliseconds (){
    return this.miliseconds
}
  computeTwoDigitNumber(value) {
/* let up2Digit = ""; --> esta es la forma más larga
if (value <10){
  up2Digit = "0" + value;
} else {
  up2Digit = value.string()
}
 return up2Digit
} 
*/
    const twoDigits = value < 10 ? "0" + value : value.toString()
    return twoDigits // forma ternaria
     
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
    this.currentTime = 0 
    this.miliseconds = 0 // añadido para que resetee tambien en el reloj
  }

  split() {

    // abreviado: return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
    
    const currentMinutes = this.getMinutes();
    const currentTwoDigitsMinutes = this.computeTwoDigitNumber(currentMinutes);

    const currentSeconds = this.getSeconds();
    const currentTwoDigitsSeconds = this.computeTwoDigitNumber(currentSeconds);

    const currentMiliSec = this.getMiliseconds ();
    const currentTwoDigitsMiliSec = this.computeTwoDigitNumber(currentMiliSec);
    
    return `${currentTwoDigitsMinutes}:${currentTwoDigitsSeconds} :${currentTwoDigitsMiliSec}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

