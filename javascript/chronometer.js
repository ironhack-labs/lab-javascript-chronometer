class Chronometer {
  constructor() {
    // ... your code goes here
    this.tiempoActual =0;//3589999 ;
    this.idIntervalo = null;
  }

  start(callback) {
    // ... your code goes here
    if (!this.idIntervalo) {
      this.intervalo = 10;
      this.idIntervalo = setInterval(() => {
        {
          this.tiempoActual += this.intervalo;
        }
        if (callback) callback();
      }, this.intervalo);
    }
  }

  getMinutes() {
    // ... your code goes here
    let m = Math.floor((this.tiempoActual / 1000) / 60);
    if (m > 59) {
      //m = 0;//reinicia minutero
      this.tiempoActual = 0; //limite crono=1hora => reiniciar contador
    }
    return m;
  }

  getSeconds() {
    // ... your code goes here
    let s =  Math.floor((this.tiempoActual / 1000) % 60);
    if (s > 59) {
      //s = 0;;//reinicia segundero
    }
    return s;
  }

  getMilliseconds() {
    // ... your code goes here
    return (this.tiempoActual % 1000);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let digit = "00";
    if (value) {
      let s = value.toString();
      if (s.length < 2) {
        digit = "0" + s;
      } else if (s.length === 2) {
        digit = s;
      } else if (s.length > 2) {
        digit = s[0] + s[1];
      }
    }
    return digit;
  }

  stop() {
    // ... your code goes here
    if (this.idIntervalo) {
      clearInterval(this.idIntervalo);
      this.idIntervalo = null;
    };
  }

  reset() {
    // ... your code goes here
    this.tiempoActual = 0;
    if (this.idIntervalo) this.idIntervalo = null;
    this.tiempoActual = 0;
  }

  split() {
    // ... your code goes here
    /*let ms = this.getMilliseconds() / this.getMillisecondsDigitFactor();
    let s = this.getSeconds();
    let m = this.getMinutes();
    let instante = this.computeTwoDigitNumber(m);
    instante += ":" + this.computeTwoDigitNumber(s);
    instante += ":" + this.computeTwoDigitNumber(ms);
    return instante
    */
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}:${this.computeTwoDigitNumber(this.getMilliseconds())}`;
  }
  setMillisecondsDigit(digits123) {
    let r = 3;
    if (digits123) {
      switch (digits123) {
        case 1:
          r = 1;
          break;
        case 2:
          r = 2;
          break;
        case 3:
          r = 3;
          break;
        default:
          break;
      }
    }
    this.millisecondsRound = r;
  }
  getMillisecondsDigitFactor() {
    switch (this.millisecondsRound) {
      case 1:
        return 100;
      case 2:
        return 10;
      case 3:
        return 1;
      default:
        return 1;
    }

  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
