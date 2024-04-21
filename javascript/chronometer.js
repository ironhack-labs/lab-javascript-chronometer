class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  /* tutto esercizio JARKO


// Se ejecutará la función updateCount() cada 1000 milisegundos (1 segundo)
let intervalId = setInterval(updateCount, 1000);

// Detener la ejecución de updateCount() después de 5 segundos
setTimeout(() => {
  clearInterval(intervalId);
  console.log("¡Fin del conteo!");
}, 5000);

// Ejemplo de setTimeout() y clearTimeout()
function myFunction() {
  console.log("¡Hola después de 2 segundos!");
}

// Se ejecutará la función myFunction() después de 2000 milisegundos (2 segundos)
let timeoutId = setTimeout(myFunction, 2000);

// Cancelar la ejecución de myFunction() antes de que se cumplan los 2 segundos
clearTimeout(timeoutId);
*/
  start(callback) {
    function currentTime() {
      currentTime++;
      if (callback) {
        callback();
      }

      console.log('Contador: ' + currentTime);
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    let valueString = value.toString();
    if (valueString.length < 2) {
      return '0' + valueString;
    } else {
      return valueString;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    let elementsReset = document.getElementsByClassName('number');
    for (let element of elementsReset) {
      element.innerHTML = '00:00:00';
    }
  }

  split() {
    let formattedMinutes = computeTwoDigitNumber(getMinutes());
    let formattedSeconds = computeTwoDigitNumber(getSeconds());
    // let altFormattedTime = formattedMinutes + “:” + formattedSeconds;
    let formattedTime = `${formattedMinutes}:${formattedSeconds}`;
    return formattedTime;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
