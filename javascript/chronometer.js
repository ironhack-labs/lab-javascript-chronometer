class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.milliseconds = 0;
  }


  start(callback) {
    this.intervalId = setInterval(() => {

      if (callback) { 
       callback();
      }

      this.milliseconds++; 

      if(this.milliseconds === 99){ 
      this.currentTime++; 
      this.milliseconds = 0; 
      }
    }, 10);
  }


  getMinutes() {
    return Math.floor(this.currentTime / 60); 
  }


  getSeconds() {
    return this.currentTime % 60; 
  }


  computeTwoDigitNumber(value) {
    if (value < 10) { 
    return `0${value}`;
    } 

    return value.toString(); 
  }


  stop() {
    clearInterval(this.intervalId); 
    this.intervalId = null;
  }

  reset() {
    this.currentTime = 0; 
    this.milliseconds = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes()); // asignamos a una constante la función computeTwoDigitNumber y le pasamos como parámetro los minutos para que nos devuelva un string con 2 cifras
    const seconds = this.computeTwoDigitNumber(this.getSeconds()); // igual que arriba
    const milliseconds = this.computeTwoDigitNumber(this.milliseconds); // igual que arriba
    return `${minutes}:${seconds}:${milliseconds}`; // interpolamos las tres constantes con 2 puntos entre medias. "00:00:00"
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
