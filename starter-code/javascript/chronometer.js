// Constructor
function Chronometer() {
    this.ButtonState = "start";
    this.rightButtonState = "reset"
    this.currentTime = {minDec: 0,     
                        minUni: 0,     
                        secDec: 0,     
                        secUni: 0,     
                        milDec: 0,     
                        milUni: 0}

    this.intervalId = {};
    this.run = ()=>{
        this.currentTime.milUni++

        if(this.currentTime.milUni == 10){
            this.currentTime.milUni = 0;
            this.currentTime.milDec++
            }

        if(this.currentTime.milDec == 10){
            this.currentTime.milDec = 0;
            this.currentTime.secUni++
            
        }

        if(this.currentTime.secUni == 10){
            this.currentTime.secUni = 0;
            this.currentTime.secDec++
            }

        if(this.currentTime.secDec == 6){
            this.currentTime.secDec = 0;
            this.currentTime.minUni++
            }

        if(this.currentTime.minUni == 10){
            this.currentTime.minUni = 0;
            this.currentTime.minDec++
            }
        console.log(this.currentTime)

        printTime()
    }
}


minDec     
minUni     
secDec     
secUni     
milDec     
milUni



Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(this.run,10)
};

let chrono1 = new Chronometer

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

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId)
};

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
