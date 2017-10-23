function Chronometer(seconds, minutes){
    this.seconds = seconds;
    this.minutes = minutes;
}

Chronometer.prototype.startClick = function(){
    var btnLeft = document.getElementById('btnLeft');
    btnLeft.innerHTML = "STOP";
    btnLeft.className = "btn stop";

    var btnRight = document.getElementById('btnRight');
    btnRight.innerHTML = "SPLIT";
    btnRight.className = "btn split";
};

Chronometer.prototype.stopClick = function(){
    var btnLeft = document.getElementById('btnLeft');
    btnLeft.innerHTML = "START";
    btnLeft.className = "btn start";

    var btnRight = document.getElementById('btnRight');
    btnRight.innerHTML = "RESET";
    btnRight.className = "btn reset";
};
