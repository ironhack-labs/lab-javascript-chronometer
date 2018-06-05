function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.minutes = "00";
    this.seconds = "00";
 }

Chronometer.prototype.startClick = function(){
    this.intervalId = setInterval(()=>{
        this.currentTime +=1;
        this.setTime();
    }, 1000);
    this.currentTime;
};

Chronometer.prototype.setMinutes = function(){
     return Math.floor(this.currentTime/60);
 }

Chronometer.prototype.setSeconds = function(){
    return seconds = Math.floor(this.currentTime%60);
}

// The one showed by the teacher :
// Chronometer.prototype.twoDigitsNumber = function(value){
//     return (value<10) ? "0" + value : value.toString();
//     };


// The one I've found (longer but same result)
Chronometer.prototype.twoDigitsNumber = function(number){
    var numberStr = number.toString();
    if (numberStr.length === 1) {
        return numberStr = "0" + numberStr;
    }
    else{
        return numberStr;
    }
};

Chronometer.prototype.setTime = function(){
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
    console.log(this.minutes);
};

Chronometer.prototype.stopClick = function(){
    clearInterval(this.intervalId);
}

Chronometer.prototype.resetClick = function(){
    this.currentTime = 0;
    this.currentTime();
}

// Chronometer.prototype.splitClick = function(){
// }