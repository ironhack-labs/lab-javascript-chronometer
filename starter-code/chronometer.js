//var this.bntLeft y this.btnRight pertenecen al objeto cronometro
function Chronometer(){
    this.btnLeft = document.getElementById("btnLeft");
    this.btnRight = document.getElementById("btnRight");
}

Chronometer.prototype.startClick = function(){
    this.btnLeft.textContent = "STOP";
    this.btnLeft.setAttribute("class", "btn stop");
    this.btnRight.textContent = "SPLIT";
    this.btnRight.setAttribute("class", "btn split");
}

Chronometer.prototype.stopClick = function(){
    this.btnLeft.textContent = "START";
    this.btnLeft.setAttribute("class","btn start");
    this.btnRight.textContent  = "RESET";
    this.btnRight.setAttribute ("class", "btn reset");
}
