class Chronometer { //funció que ens donen
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  start(printTime) {
    this.intervalId = setInterval(() => {   
      printTime();
      this.currentTime++;
    }, 1000);  //Augmenta el current time en 1 cada segon
  }

  getMinutes() { //Calcular els minuts que han passat en base als segons que estaven emagatzemats al currentTime
    let minutes = Math.floor(this.currentTime / 60); //arrodonim el resultat amb el math.florr de la divisió per 60
    return minutes;
  }

  getSeconds() {
    return this.currentTime % 60; //retornem la resta de dividir el current time(segons passats) dividit entre 60 que serà el que resta. Si pasen 130 segons ens retorna 10s
  }

  computeTwoDigitNumber(value) { // crrem una funció que ens retornarà en text, el valor i si el valor te un sol digit li afegim un 0 davant (09)
    if (value > 9) {//en aquest cas significa que es de dos digits ens retorna el valor
      return value.toString();
    } else if (value >= 0 && value <= 9) {
      return '0' + value.toString(); //aqui ens indica si el valor te un digit ens retorna amb un 0 davant
    }
  }

  stop() {
    clearInterval(this.intervalId); //la funció para l'interval i li pasem com a parametre la funció que volem que pari.
  }

  reset() {
    return (this.currentTime = 0); //quan es posi en marxa la funció, s'iguala el current time a zero.
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}${this.computeTwoDigitNumber(this.getSeconds())}`; //quan apretem split ens imprimirà el valor actual dels minuts i segons.


  }
 
}
   


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */

if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

