class Chronometer {

  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick(callback) {

    setInterval( () => { this.currentTime++ }, 1000);  // incrementamos en 1 el valor de currentTime, cada segundo.


  }


  getMinutes() {  // devolvemos a cuantos minutos equivale el valor de currentTime.

    if (this.currentTime >= 60) {

      return Math.trunc( this.currentTime / 60 ) 

    } else {

      return 0

    }


  }
  getSeconds() { // devolvemos cuantos segundos tenemos en currenTime.

    if (this.currentTime < 60) {

      return this.currentTime 

    } else {

      return this.currentTime - 60

    }

  }
  twoDigitsNumber() { // convertimos el valor de currenTime a string, siempre con dos valores.

    return this.currentTime.toString().padStart(2, "0");


  }
  stopClick() { // limpiamos el valor de la propiedad intervalId

    clearInterval(this.intervalId) 

  }
  resetClick() {

    this.currentTime = 0

  }
  splitClick() {  // funcion stop

    let min = this.getMinutes();
    let sec = this.getSeconds();

    if (min < 10) {
      return (`${0}${min}:${0}${sec}`);
    } else {
      return (`${min}:${sec}`);
    }


  }

}