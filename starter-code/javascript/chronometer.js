let minutos = 0;
let segundos = 0;
let milisegundos = 0;
// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
    let reloj = this;
    reloj.intervalId = setInterval( function(){
        reloj.currentTime++;
        reloj.setTime();
        printMinutes();
        printSeconds();
    },1000);
    //printMinutes();
};

Chronometer.prototype.setMinutes = function () {
    return parseInt(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
    return parseInt(this.currentTime % 60);  
};

Chronometer.prototype.twoDigitsNumber = function (valor) {                                     
    if (valor < 10) return '0' + valor;
    return valor + '';      
};

Chronometer.prototype.setTime = function () {
    minutos = this.twoDigitsNumber(this.setMinutes());
    segundos = this.twoDigitsNumber(this.setSeconds());
};

Chronometer.prototype.setMilliseconds = function () {
    milisegundos = this.currentTime * 1000;
};

Chronometer.prototype.stopClick = function () {
    clearInterval();
};

Chronometer.prototype.resetClick = function () {

};

Chronometer.prototype.splitClick = function () {

};
