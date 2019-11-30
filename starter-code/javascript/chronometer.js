class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    //se que marc dijo que era un poco cutre pero no se plantarlo de otra forma creo que se podria llamar a la clase principal
    let that = this;

    this.intervalId = setInterval(function() {
      that.currentTime+=1;
    }, 1000)

  }

  //los parseo sin mas 
  getMinutes(){
 return parseInt(this.currentTime / 60);
  }

  getSeconds(){
return parseInt(this.currentTime % 60);
  }

  twoDigitsNumber(number) {
     number = new String(number);
    //condicional para crear la parte de los segundos 
     if (number.length < 2)
    {
      return 0 + number;
    }
    //si no que me retorne el valor del numero entero
    return number;
  }

  setTime(){
    let minutos = this.twoDigitsNumber(this.getMinutes());
    let segundos = this.twoDigitsNumber(this.getSeconds());
    return [minutos , segundos];
  }

stopClick(){
  clearInterval(this.intervalId);
}

  resetClick(){
this.currentTime = 0;
  }

  // splitClick() {}
}
