function Crono(){
  this.minutos = 0;
  this.segundos = 0;
  this.milisegundos = 0;
}

Crono.prototype.startClick = function() {
  this.startCount();
  this.changeButtonLeft();
  this.changeButtonRight();
}

Crono.prototype.startCount = function() {
  var thisCrono = this;
  var minDec = document.getElementById("minDec");
  var minCen = document.getElementById("minCen");
  var secDec = document.getElementById("secDec");
  var secCen = document.getElementById("secCen");

  setInterval(function(){
    console.log("hola");
   thisCrono.segundos = thisCrono.segundos + 1;
   if(thisCrono.segundos >= 60){
     thisCrono.segundos = 0;
     thisCrono.minutos += 1;
   }

   if(thisCrono.minutos < 10) {
     minDec.innerHTML = 0;
     minCen.innerHTML = thisCrono.minutos;
   } else {
     minDec.innerHTML = thisCrono.minutos.toString().split('')[0];
     minCen.innerHTML = thisCrono.minutos.toString().split('')[1];
   }

   if(thisCrono.segundos < 10) {
     secDec.innerHTML = 0;
     secCen.innerHTML = thisCrono.segundos;
   } else {
     secDec.innerHTML = thisCrono.segundos.toString().split('')[0];
     secCen.innerHTML = thisCrono.segundos.toString().split('')[1];
   }

  },1000);
}

Crono.prototype.stopClick = function() {
  clearInterval(1);
  this.changeButtonLeft();
  this.changeButtonRight();
}

var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");

Crono.prototype.changeButtonLeft = function() {
  if(btnLeft.className == "btn start") {
    btnLeft.className = "btn stop";
    btnLeft.innerHTML = "STOP";

  } else {
    btnLeft.innerHTML = "START";
    btnLeft.className ="btn start";

  }
}

Crono.prototype.changeButtonRight = function() {
  if(btnRight.className == "btn reset") {
    btnRight.className = "btn split";
    btnRight.innerHTML = "SPLIT";
  } else {
    btnRight.innerHTML = "RESET";
    btnRight.className ="btn reset";
  }
}


Crono.prototype.currentTime = function() {
  console.log(((this.minutos < 10) ? '0' + this.minutos : this.minutos) + ":" +
     ((this.segundos < 10) ? '0' + this.segundos : this.segundos));
}

// crono.run();
