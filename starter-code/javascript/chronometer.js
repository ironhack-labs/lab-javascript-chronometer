// Constructor
function Chronometer() {

    this.currentTime = 0; // hay que añadir como parametro un valor 
    this.intervalId = " "; // hay que iniciarlo como String vacio 

 };

 Chronometer.prototype.startClick = function () {
    
    var that = this;

    this.intervalId = setInterval (function (){
        that.currentTime ++; // utilizamos el that porque dentro de la funcion de setInterval no llega el this ( "el truquito")
    },1000);
    
 };

 Chronometer.prototype.setMinutes = function () {

    this.currentTime = (this.currentTime)/(60);
  
};

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
