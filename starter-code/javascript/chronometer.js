// Constructor
function Chronometer() {
 this.secUni = document.querySelector('#secUni');
 this.secDec = document.querySelector('#secDec');
 this.minUni = document.querySelector('#minUni');
 this.minDec = document.querySelector('#minDec');
 this.milUni = document.querySelectorAll('#milUni');
 this.milDec = document.querySelectorAll('#milDec');



 this.onoffBtn = document.querySelector('.start');
 this.onoffBtn = document.addEventListener('click', this.startClick.bind(this));


 this.resetBtn = document.querySelector('.reset');
 this.resetBtn = document.querySelector('click', this.resetClick.bind(this));

 this.setIntervalId = undefined; 
 
 this.time = new Date();
 this.time.setSeconds(0);
 this.time.setMinutes(0);
 this.time.setMilliseconds(0);

}

 Chronometer.prototype.startClick = function () {
    if (!this.setIntervalId) {
        this.setIntervalId = setInterval(function() {
            this.countUp();
            this.updateDisplays();
        }.bind(this), 10);   
    } else{
        clearInterval(this.setIntervalId);
        this.setIntervalId = undefined;
    }
 };

 Chronometer.prototype.countUp = function () {
    this.time.setMilliseconds(this.time.getMilliseconds() + 10);
 };

 Chronometer.prototype.updateDisplays = function () {
    var seconds = this.time.getSeconds();
    seconds = (seconds > 9) ? seconds + '' : '0' + seconds;
    this.secUni.innerText = seconds[1];
    this.secDec.innerText = seconds[0];
    var minutes = this.time.getMinutes();
    minutes = (minutes > 9) ? minutes + '' : '0' + minutes;
    this.minUni.innerText = minutes[1];
    this.minDec.innerText = minutes[0];
    var miliseconds = this.time.getMilliseconds();
    miliseconds = (miliseconds > 9) ? miliseconds + '' : '0' + miliseconds;
    this.milUni.innerText = miliseconds[1];
    this.milDec.innerText = miliseconds[0];
 };

 Chronometer.prototype.resetClick = function () {
    if(btnRight.innerHTML === "SPLIT"){
        this.splitClick();
    }else{
        this.time.setSeconds(0);
        this.time.setMinutes(0);
        this.time.setMilliseconds(0);

        this.updateDisplays();
        this.removeSplit();
    }

};

Chronometer.prototype.splitClick = function () {
        var splitTime = this.minDec.innerText + this.minUni.innerText + ':' + this.secDec.innerText + this.secUni;
        var ol = document.getElementById('splits');
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(splitTime));
        ol.appendChild(li);
};

Chronometer.prototype.removeSplit = function () {
    var ol = document.getElementById('splits');
    if(ol.firstChild){
        ol.removeChild(ol.firstChild);
    }
};
                                 

 //Chronometer.prototype.setSeconds = function () {
  
 //   };

// Chronometer.prototype.setMinutes = function () {
  
// };

// 

// Chronometer.prototype.twoDigitsNumber = function () {
  
// };

// Chronometer.prototype.setMilliseconds = function () {

// };

//Chronometer.prototype.stopClick = function () {
  
//};

//Chronometer.prototype.resetClick = function () {

//};

// Chronometer.prototype.splitClick = function () {

// };
