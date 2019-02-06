// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;

    }Chronometer.prototype.startClick = function () {
       this.intervalId = setInterval (()=>{
           this.currentTime ++
           this.setTime()
           printTime()
       }, 1000)};
       Chronometer.prototype.setMinutes = function () {
       var minutos = Math.floor(this.currentTime / 60)
       return minutos
    };

    Chronometer.prototype.setSeconds = function () {
    var segundos = (this.currentTime % 60)
    return segundos
    };

    Chronometer.prototype.twoDigitsNumber = function (value) {
    if (value < 10){
       return "0" + value
    };
       return value.toString();
    };

    Chronometer.prototype.setTime = function () {
       this.minutes =this.twoDigitsNumber(this.setMinutes())
       this.seconds =this.twoDigitsNumber(this.setSeconds())};
    
    Chronometer.prototype.setMilliseconds = function () {
        var milisegundos = (this.currentTime)
        return milisegundos;
    };
    Chronometer.prototype.stopClick = function () {
     clearInterval(this.intervalId)
    };
    Chronometer.prototype.resetClick = function () {
       this.currentTime = 0;

    };
    
    Chronometer.prototype.splitClick = function () {
        var lista = document.getElementsByClassName("splits")
        var punto = document.createElement('li')
        punto.innerHTML = chronometer;
        lista.appendChild(punto)
    };