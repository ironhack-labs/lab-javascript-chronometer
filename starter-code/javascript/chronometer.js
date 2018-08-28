// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
};

Chronometer.prototype.startClick = function () {
    setInterval(function(){
        this.currentTime++;
       this.intervalId = this.setTime();
        }.bind(this), 1000);

};

 Chronometer.prototype.setMinutes = function () {
     if( this.currentTime === 0){
         return 0;
     } else if (this.currentTime > 0){
         return Math.floor(this.currentTime/60); //Minutos. Redondea a la baja (si no suma uno de más)
     }
  
 };

Chronometer.prototype.setSeconds = function () {
    if( this.currentTime === 0){
        return 0;
    } else if (this.currentTime > 0){
        return (this.currentTime%60); //segundos
    }
};

 Chronometer.prototype.twoDigitsNumber = function (digit) {
    if(digit < 10){
        return digit = "0" + digit; //string
    }
    else{
        return digit = "" + digit; //string 
    }
 };

 Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());
 };

//Chronometer.prototype.setMilliseconds = function () {
 //};

Chronometer.prototype.stopClick = function () {
     clearInterval(this.intervalId);
};

 Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
 };

// Chronometer.prototype.splitClick = function () {

// };
