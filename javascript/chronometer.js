class Chronometer {
  constructor() {
    // ... your code goes here

    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    // ... your code goes here

    ///esta esto bien para saber si se le pasan argumentos?
    if (arguments.length !== 0) {   ////////////////// cual es el metodo que se usa normalmente?

      callback()
      //aqui poner que ponemos???
    }


    this.intervalId = setInterval(function () {
      console.log(i);

      this.currentTime += 1;


    }.bind(this), 1000);
  }

  getMinutes() {
    // ... your code goes here
    // if (current === 0) {

    //   return 0
    // }

    let minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60
    return seconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here

    if (value < 10) {
      //console.log(" 0 " + value)
      return String("0" + value)
    } else {

      return String(value)
    }
  }

  stop() {


    clearInterval(this.intervalId);
    // ... your code goes here
  }

  reset() {
    // ... your code goes here

    this.currentTime = 0;  //////////////////////////////// porque no hay que poner bind aqui? el contexto no seria window?
  }

  split() {
    ///son metodos del objeto chronometro, entonces su contexto es chronometro no????
    this.getMinutes()
    this.getSeconds()
    this.computeTwoDigitNumber
    let splitted = this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds())
    return splitted
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
