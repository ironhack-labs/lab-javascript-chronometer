/*clase o prototipo va en mayuscula*/ /*(parametros)*/
/* tiene atributos y métodos*/
/*this.objeto el this llama al objeto del objeto*/

function Chronometer() {}

/*definicion de un objeto*/
Chronometer.prototype.startClick = function () {
    btnLeft = document.getElementById('btnLeft')
    btnRight = document.getElementById('btnRight')
    if (btnLeft.className == "btn start") {
        btnLeft.className = "btn stop";
        btnLeft.innerHTML = "STOP";
        btnRight.className = "btn split";
        btnRight.innerHTML = "SPLIT";
    }
};
Chronometer.prototype.stopClick = function () {
    if (btnLeft.className = "btn stop") {
        btnLeft.className = "btn start";
        btnLeft.innerHTML = "START";
        btnRight.className = "btn reset";
        btnRight.innerHTML = "RESET";
    }
};