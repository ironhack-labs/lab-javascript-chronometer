// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId 
    this.minut = 0
    this.secon= 0
    this.startClick = ()=>{     
        this.intervalId = setInterval(()=>{       
        this.currentTime++
        this.setTime()
        
        },1000)
    }
    this.setMinutes = function(){
        
        return parseInt(this.currentTime / 60)
    }
    this.setSeconds = function(){
        var minutos = this.setMinutes()
        
        return this.currentTime - (minutos*60)
    }
    this.twoDigitsNumber  = function(valor){
        if(valor < 10){
            
            return "0" + String(valor)
        }else{
           
            return valor
        }
    }
    this.stopClick = function(){
        clearInterval(this.intervalId)
    }
    this.setTime = function(){
        
        this.minut = this.twoDigitsNumber(this.setMinutes())
        this.secon = this.twoDigitsNumber(this.setSeconds())
        
        
    }
    this.resetClick= function(){
        this.currentTime = 0
        this.setTime()
        
    }
}

// }

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
