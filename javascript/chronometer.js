class Chronometer {
  constructor() {
    //
    this.currentTime=0//creamos las porpiedades del objeto
    this.intervalId=null
    // ... your code goes here
  }

  start(callback) {
    // ... your code goes here
    //let i =0;
    //Creamos condicion que si nos pasan el callback 
    if(callback){
      //set interval con la funcion callback
      let inertvalIdCall= setInterval(callback,1000)//creamos la varible que es el ID del intervalo
      //cambiamos la propeidad Id del callback
      this.intervalId=inertvalIdCall
    }
    else{ //si no nos pasan el callback hacemos un nuevo intervalo sumandole a la propiedad
      //currentTIme 1
    const inertvalId1= setInterval(()=>{ 
        this.currentTime+=1
         this.intervalId=inertvalId1
    },1000)
  
  }
}

  getMinutes() {
    // ... your code goes here
    //creamos la variable de minutos igualada al tiempo que esta dentro del objeto
    //y la dividimos entre 60 para tener los minutos
   let minutos=this.currentTime/60;
   //math.trun devolvemos un numero entero
   return Math.trunc(minutos)

  }

  getSeconds() {
    // ... your code goes here
    //hicimos la varaible segundoRestantes y le asignamos el valor del objeto de currentTIme
    //y le hicimos su modulo para tener el residuo de 60
  let segundosRestantes= this.currentTime%60;
  return segundosRestantes;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    //creamos una variable y le asignamos un 0 como string
    let valorString="0"
    //los numeros menores a 10 los agregamos a la variable valorString
    if(value <10){
      valorString+= value.toString()
      return valorString
    }else{
      valorString = value.toString()
      return valorString
    }
  }

  stop() {
    // ... your code goes here
    //Paraamos el intervalo con clrearInterval y el ID del objeto
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    //regreso el valor del objeto current time a 0
    this.currentTime=0
  }

  split() {
    // creamos las variables para llamar a la funcion que convierte en strings y los aplicamos 
    //a los minutos y a los segundos

    let splitM=this.computeTwoDigitNumber(this.getMinutes())
    // ... your code goes here
    let splitS=this.computeTwoDigitNumber(this.getSeconds())
  //regresamos los valores ya en string
   return   `${splitM}:${splitS}` 
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}