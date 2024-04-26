class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;

  }

  start(callback) {
    let count = 0;

    function updatecurrentTime() {
      currentTime++;
      if (callback) {
        callback();
      }
      console.log('Contador: ' + currentTime);
    }
    intervalId = setInterval(updatecurrentTime, 1000);
  }

  getMinutes() {
    return Math.floor (this.currentTime / 60);
  }

  getSeconds() {
    return Mthis.currentTime % 60; // me explota la cabeza
  }
 
  computeTwoDigitNumber(value) {
    if (value < 10 ){
      return "0"+value; // trampilla clasica para agregar un 0 antes de un numero menor 10.
    } else {
      return value.toString()
    }
  }

  stop() {
    clearInterval(this.intervalId) //con esto llevo a cero el currentTime tageado con interval id
  }

  reset() {
   this.stop();
   this.currentTime = 0
   //aqui sacar el element (id o lo que sea) del temporizador y liuego hacer el inner.html = 00:00,00
  }

  split() {
    return computeTwoDigitNumber(this.getMinutes())+ ":" + computeTwoDigitNumber(this.getSeconds()) //no estoy seguro pero no le veo otra lógica.
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
