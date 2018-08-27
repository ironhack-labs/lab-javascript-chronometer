// Constructor

class Chronometer {
 constructor(){

    this.currentTime = 0

    this.intervalId = 0

 }

 startClick(){
    var currentTime = this.currentTime
    var crono = this
     this.intervalId = setInterval(function(){
        currentTime++
        crono.currentTime = currentTime
     }, 1000)
 }
 setMinutes(){
     return Math.floor(this.currentTime / 60)
 }

 setSeconds(){
     var segundosActuales= this.currentTime
     var minutosActuales = Math.floor(this.currentTime / 60)
     var segundosrestantes = segundosActuales - (minutosActuales*60)
    return segundosrestantes.toString()
} 

  twoDigitsNumber(quieroComer){
      if(quieroComer<10){
          return "0"+quieroComer
      }else{
          return String(quieroComer)
      }
  }
  
  setTime(){
      var minAntes = this.setMinutes()
     var minutos = this.twoDigitsNumber(minAntes)
     var segAntes = this.setSeconds()
     var segundos = this.twoDigitsNumber(segAntes)
     var tiempo = [minutos, segundos]
     return tiempo
  }

  stopClick (){
      this.intervalId = clearInterval()
  }

  resetClick(){
      this.currentTime = 0
  }
}



// Chronometer.prototype.startClick = function () {

// };

// Chronometer.prototype.setMinutes = function () {
  
// };

// Chronometer.prototype.setSeconds = function () {
  
// };

// Chronometer.prototype.twoDigitsNumber = function () {
  
// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
