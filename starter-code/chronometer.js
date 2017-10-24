"use strict";

/*var minDec = document.getElementById("minDec");
minDec.innerText = MinDec(seconds);*/

function changebtn (idName, text){

  var aux;
    document.getElementById("idName").className = "btn stop";
    stop.innerText="STOP";

    document.getElementById("idName").className = "btn";


    document.getElementById("idName").className = "btn";


    document.getElementById("idName").className = "btn";

  }



  return text;
}

var Chronometer = {
  btnLeft: "START",
  btnRight: "RESET",

  startClick: function() {
    this.btnLeft = Changebtn(btnLeft, "STOP");
    this.btnRight = Changebtn(btnRight, "SPLIT");
  },

  stopClick: function() {
    this.btnLeft = Changebtn(btnLeft, "STAR");
    this.btnRight = Changebtn(btnRight, "RESET");

  }

};
