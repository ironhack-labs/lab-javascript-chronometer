 //Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId;
    this.currentMilliseconds = 0;
}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval (()=>{
        console.log(this.currentTime)
        this.currentTime++
    }, 1000)
    
};

Chronometer.prototype.setMinutes = function () {
   return (this.currentTime / 60)
   
};

Chronometer.prototype.setSeconds = function (minutes) {
    return (this.currentTime - (minutes * 60))
    
};

Chronometer.prototype.twoDigitsNumber = function () {
    if(this.setSeconds< 10) console.log (this.setMinutes + ": 0" + this.setSeconds)
    else console.log (this.setMinutes + ":" + this.setSeconds)

};

Chronometer.prototype.setTime = function () {
    
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval (this.setTime)
};

Chronometer.prototype.resetClick = function () {
    
};

//Chronometer.prototype.splitClick = function () {

//};


//La primer solucion 

/*Chronometer.prototype.twoDigitsNumber = function () {
    var seg = 0
    var min = 0
    var interval = setInterval(minutos, 100)
    
    function minutos(){
     seg++
     if( seg === 59) {
       seg = 0
       min++
     }
     if(min === 60) clearInterval(interval)
     if(seg < 10) console.log(min + ":0" + seg)
     else console.log(min + ":" + seg)
    }
};
*/