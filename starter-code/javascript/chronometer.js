// Constructor
function Chronometer() {

    this.currentTime = 0; // hay que añadir como parametro un valor 
    this.intervalId = " "; // hay que iniciarlo como String vacio 

 };

 Chronometer.prototype.startClick = function () {
    
    var that = this;

    this.intervalId = setInterval (function () {
    
        that.currentTime ++; // utilizamos el that porque dentro de la funcion de setInterval no llega el this ( "el truquito"
        that.setTime();
    },1000);
    
 };

 Chronometer.prototype.setMinutes = function () {
    return this.currentTime = Math.trunc((this.currentTime)/ 60);    
    console.log(this.currentTime)
};

Chronometer.prototype.setSeconds = function () {
//    
    return this.currentTime = this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
    // this.setMinutes;
    // this.setSeconds;
    if (value < 10) {
        return ("0" + value)
    } else {
        return ("" + value)
    }  
};

Chronometer.prototype.setTime = function () {
    
    this.setSeconds ();
    this.setMinutes ();
    this.twoDigitsNumber ();

};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId)
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
