// Constructor
function Chronometer() {
 this.secUni = document.querySelector('#secUni');
 this.secDec = document.querySelector('#secDec');
 this.minUni = document.querySelector('#minUni');
 this.minDec = document.querySelector('#minDec');
 this.milUni = document.querySelector('#milUni');
 this.milDec = document.querySelector('#milDec');

 this.onBtn = document.querySelector(' .start');
 this.onBtn.addEventListener('click', this.startClick.bind(this));

 this.resetBtn = document.querySelector(' .reset');
 this.resetBtn.addEventListener('click', this.resetClick.bind(this));

 this.setIntervalId = undefined; 

 this.time = new Date();
 this.time.setSeconds(0);
 this.time.setMinutes(0);
 this.time.setMilliseconds(0);
}

// con startClick activamos el cronometro, si pulsamos de nuevo lo paramos
 Chronometer.prototype.startClick = function () {
    if (!this.setIntervalId) {
        this.setIntervalId = setInterval(function() {
            this.countUp();
            this.updateDisplays();
        }.bind(this), 10);   
    } else{
        this.stopClick();
    }
 };

 // stopClick para parar el cronómetro
 Chronometer.prototype.stopClick = function () {
    clearInterval(this.setIntervalId)
    this.setIntervalId = undefined;
 }

 // con resetClick si esta en running el cronometro si pulsamos añadiremos al contador split, 
 // si no ponemos todo a cero.
 Chronometer.prototype.resetClick = function () {
     if (btnRight.innerHTML === "SPLIT"){
         this.splitClick();
     } else {
    this.time.setSeconds(0);
    this.time.setMinutes(0);
    this.time.setMilliseconds(0);
    this.updateDisplays();
    this.removeSplit();
     }
 };

 //  el contador
 Chronometer.prototype.countUp = function () {
    this.time.setMilliseconds(this.time.getMilliseconds() + 10);
 };

 // updateDisplays actualiza el display 
 Chronometer.prototype.updateDisplays = function () {
    var seconds = this.time.getSeconds();
    seconds = (seconds > 9) ? seconds + '' : '0' + seconds;
    this.secUni.innerText = seconds[1];
    this.secDec.innerText = seconds[0];
    var minutes = this.time.getMinutes();
    minutes = (minutes > 9) ? minutes + '' : '0' + minutes;
    this.minUni.innerText = minutes[1];
    this.minDec.innerText = minutes[0];
    var milliseconds = this.time.getMilliseconds();
    milliseconds = (milliseconds > 9) ? milliseconds + '' : '0' + milliseconds;
    this.milUni.innerText = milliseconds[1];
    this.milDec.innerText = milliseconds[0];
 };

 // splitClick añade al ol de html li's que cada vez que pulsamos split
 Chronometer.prototype.splitClick = function () {
    var splitTime = this.minDec.innerText + this.minUni.innerText + ":" + this.secDec.innerText + this.secUni.innerText + ":" + this.milDec.innerText + this.milUni.innerText;
    var ol = document.getElementById("splits");
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(splitTime));
    ol.appendChild(li); 
};

// con removeSplit limpiamos el ol de html cuando pulsamos reset
 Chronometer.prototype.removeSplit = function () {
    var ol = document.getElementById("splits");
while(ol.firstChild) ol.removeChild(ol.firstChild);

 }
 
 

 


