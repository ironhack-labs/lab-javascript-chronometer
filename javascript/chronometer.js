class Chronometer {
  constructor () {
    this.currentTime = 0
    this.intervalId = null
  }

  
  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;

      // Calculamos los minutos y segundos
      const minutes = this.getMinutes();
      const seconds = this.getSeconds();

      // Llamamos al callback pasándole los minutos y segundos
      if (callback) {
        callback(minutes, seconds);
      }
    }, 1000);
  }


  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }



  computeTwoDigitNumber(value) {
    return ("0" + value).slice(-2); 
  }

  stop() {
    clearInterval(this.intervalId); // Detiene el cronómetro
  }

  reset() {
    this.currentTime = 0; // Reiniciamos el contador a 0

    // Restablecemos el HTML a "00:00:00"
    document.getElementById("minDec").innerHTML = "0";
    document.getElementById("minUni").innerHTML = "0";
    document.getElementById("secDec").innerHTML = "0";
    document.getElementById("secUni").innerHTML = "0";
    document.getElementById("milDec").innerHTML = "0";
    document.getElementById("milUni").innerHTML = "0";

    
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}







// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
