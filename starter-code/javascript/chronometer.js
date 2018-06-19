// Constructor
function Chronometer() {
//Usar this. al definir los parametros del contructor    
    this.currentTime = 0;
    this.intervalId = 0;
}



Chronometer.prototype.startClick = function () {
//Crear variable self para sustituirla por el this (si no, no detecta el this)
    var self = this
// Crear un intervalo (actualizar this.intervalId con el id)
    this.intervalId = setInterval(function() {
     self.currentTime += 1
//(Esto es para ek setTime method)- Así llamamos al setTime en cada intervalo     
     self.setTime();
    }, 1000);
// Cada segundo que pasa aumenta en 1 this.currentTime

}

Chronometer.prototype.setMinutes = function () {
//Definir la funcion para que pase de segundos a minutos el this.currentTime 
    if (this.currentTime < 60) {
        return 0;
    } else {
        return Math.floor(this.currentTime/60)
    }
}

Chronometer.prototype.setSeconds = function () {
//Definir la funcion para que devuelva los segundos restantes despues de *
//* hacer los minutos al this.currentTime 
//primero definimos variable minutos que nos da la funcion setMinutes.
//Despues definimos la var que nos dara los segundos
//La llamamos    

    var minutes = this.setMinutes()
    var seconds = this.currentTime - minutes * 60
    return seconds
}

Chronometer.prototype.twoDigitsNumber = function (number) {
//Creamos una variable para que pase el numero de un digito a dos digitos  
    var result = ("0" + number).slice(-2);
    return result;
}

Chronometer.prototype.setTime = function () {
//EL setTime sera llamado para cada intervalo del setInterval, por lo tanto *
//*demebos incluirla en esa funcion
//-------------------------------------------------//
//Creamos las dos variables para minutos y segundos
    var minutes = this.twoDigitsNumber(this.setMinutes())
    var seconds = this.twoDigitsNumber(this.setSeconds())
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
}

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0
}

// Chronometer.prototype.splitClick = function () {

// };
