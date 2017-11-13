Ahí van unos de consejos:
- El cronómetro debería estar implementado en un *chronometer.js*, hay que añadir este nuevo script en el *index.html* antes del main.js
- El constructor de Chronometer podría tener esta pinta:

function Chronometer(leftBtnId, rightBtnId, displayId) {
  this.leftBtn = document.getelementById(leftBtnId);
  this.rightBtn = document.getelementById(rightBtnId);
  this.display = document.getelementById(displayId);
}

De esta forma ya podemos manipular los 3 componentes desde los métodos del prototipo del Cronómetro:
startClick` & `stopClick      (te faltan!!)

Cuando instanciamos un chronómetro lo podemos hacer así:
var chronometer = new Chronometer('btnLeft', 'btnRight', 'display');






La función `startClick` debería tener una pinta tal que así:

Chronometer.prototype.startClick = function() {
  this.setStopBtn();
  this.setSplitBtn();
  this.timeIntervalId = setInterval(function(chronometer) {
     if (!chronometer.elapsedSeconds) {
          chronometer.elapsedSeconds = 0;     
     }
     chronometer.elapsedSeconds++;
     // update the display, Good luck!
     
  }, 1000, this);
};



Este ejercicio se puede implementar de 2 formas, acumulando los segundos que han pasado en `elapsedSeconds` o operando con objetos de tipo `Date`(mucho más elegante ) usad la que más os convenga, cada una tiene sus fortalezas y debilidades :