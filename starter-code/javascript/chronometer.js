// Constructor
 function Chronometer() {
  this.currentTime = 0
  this.intervalId = 0 //propiedad que se sobreescribe al darle a startclick 
 }

Chronometer.prototype.startClick = function () { //that solo se usa aqui para que no se pierda el scope
  var that = this
  this.intervalId = setInterval(function(){
    that.currentTime++
    
    printTime(that.setTime()) //that.setTime devuelve un paquete que es un array con el calculo hecho de mins y segs

  }, 1000)

};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime/60) //hasta q no llegue a 60 no me va a devolver otra cosa que no sea 0
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime%60 //quiero que me devuelva la parte que sobra de los segundos acumulados (cada 60)
};

Chronometer.prototype.twoDigitsNumber = function (num) { //esta funcion no forma parte de lo anterior, solo le pedimos que nos devuelva dos numeros cuando solo hay 1
  if (num < 10) {
    return "0" + num
  } else {
    return "" + num //string vacio para que siempre lo devuelva de la misma manera
  }
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes()) //llamo a la funcion setminutes y setseconds que me va a ir acumulando en las var los numeros de 2 digitos
  var seconds = this.twoDigitsNumber(this.setSeconds()) //ahora mismo solo esta acumulando aqui. //le pongo los parentesis xq lo que pido es el return // this. SON MÉTODOS DEL CRONÓMETRO
      return [minutes,seconds] //para que me devuelva un array  con mins y segs                          
};                                                      

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId)
};

Chronometer.prototype.resetClick = function () { //este reseteo no pasa hasta que no lo llamo desde otro lado
  this.currentTime = 0                           //pongo el cronometro a 0 en la lógica interna del cronómetro ( no visualmente)
};

Chronometer.prototype.splitClick = function () {
  return this.setTime() // esto ya me estaba devolviendo un array como lo queremos [mins, segs], establecido en la funcion setTime
};
