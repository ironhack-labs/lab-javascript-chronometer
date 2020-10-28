class Chronometer {
  constructor() {
    
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(()=>{
      this.currentTime += 1;
    },1000)
  }
  getMinutes() {
   
    //*Nota: Es un cronómetro, aquí no valdría Math.round porque redondearía antes de llegar al minuto.
    return Math.floor(this.currentTime/60);

  }
  getSeconds() {
    
    //*Nota: Necesitamos el RESTO entre la división de segundos/60 -- % = remainder
    return this.currentTime % 60;

  }

  twoDigitsNumber(number) {
    
    return number.toString().length == 2 ? `${number}` : `0${number}`;


    //*Nota: Estas dos maneras son correctas, pero el test te pide un return luego hay que usar el Conditional Operator
    // if (number.toString().length == 2) {
    //   // number.toString()
    //   `${number}`
    // } else {
    //   // "0" + number.toString()
    //   `0${number}`
    // }

  }
 


  stopClick() {
    
    clearInterval(this.intervalId)
  }
  resetClick() {
    
    this.currentTime = 0
  }
  splitClick() {
   
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`

  }
}
