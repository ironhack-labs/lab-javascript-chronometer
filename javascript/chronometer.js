class Chronometer {
  constructor() {                                                         // Creamos la clase, con el metodo constructor sin argumentos
    this.currentTime = 0;                                                 
    this.intervalId = 0;                                                  // El metodo tiene dos propiedades relaciondas con la clase chronometer
    // ... your code goes here                                            // Usamos this para relacionarlas a la clase e igualamos a 0 como valor inicial

  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
    this.currentTime++;
    }, 1000) ;                                                            // Usamos la arrow function setInterval en la propiedad intervalId 
  }                                                                       // Incrementamos en uno, after 3 seconds, currentTime should be 3                                                                        // El startClick()método debe usar el setInterval()método JS para incrementar en 1 la currentTimepropiedad cada 1 segundo.
    // ... your code goes here                                            // Usamos this.currentTime++ para agregar 1 cada 1000 ms a la propiedad currentTime


  getMinutes() {
    return Math.floor(this.currentTime / 60);                             // Ahora nuestro currentTime da segundos, devolver currentTime en minutos
    // ... your code goes here                                            // usamos un return con el metodo math.floor q devuelve un entero
  }                                                                       // entre 60 para obtener cuantos minutos son los segundos q devuelve current time
  
  getSeconds() {                                                          
    return this.currentTime % 60;                                         // Al usar el mathfloor, nos sobran segundos que debemos volver a calcular
    // ... your code goes here                                            // Usando el operador % obtenemos el resto de la division que son los segundos
  }
  twoDigitsNumber(digit) {                                                // Para crear un numero de dos digitos cuando recibe cualquier valor en digit:
    if(digit < 10){                                                       // condicion para que ese numero sea menor q 10 para que 123456789 se alojen en el primer digito
      return `0${digit}`;                                                 // Devuelve el formato correcto con un 0 delante cuando es <10, ojo con los backsticks
    }else{
    return `${digit}`;                                                    // y si no, que devuelva el digito que ocupa dos digitos xk es > 10.
    }

    // ... your code goes here
  }
  stopClick() {
    clearInterval(this.intervalId);                                       // Usamos la propiedad clearInterval con el parametro this.intervalId para q borre cuando se invoca stopclick()
    // ... your code goes here                                            
  }
  resetClick() {
    this.currentTime = 0;                                                 // Igualamos a 0 cuando se reinica el crono
    
    // ... your code goes here
  }
  splitClick() {                                                           // cuando se invoca esta funcion, debe devolver el tiempo en ese momento
    let min = this.getMinutes()                                            // declaramos min y sec para guardar el valor de this.getMinutes() y this.getSeconds()
    let sec = this.getSeconds()

  return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`       // devolvemnos el formato correcto : entre los digitos
    // ... your code goes here
  }
} 
