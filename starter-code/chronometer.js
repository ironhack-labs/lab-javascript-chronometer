
function Chronometer(){}

  Chronometer.prototype.startClick = function(){
    changeLeft();
    changeRight();
    run();
  };

  Chronometer.prototype.stopClick = function(){
    changeLeft();
    changeRight();
    run();
  };

  function changeLeft(){
    var left = document.getElementById("btnLeft");
    if(left.innerHTML == "START"){
      document.getElementById("btnLeft").classList.remove("start");
      document.getElementById("btnLeft").classList.add("stop");
      left.innerHTML = "STOP";
    } else{
      document.getElementById("btnLeft").classList.remove("stop");
      document.getElementById("btnLeft").classList.add("start");
      left.innerHTML = "START";
    }
    run(left.innerHTML);
    console.log(left.innerHTML);
  }

  function changeRight(){
    var right = document.getElementById("btnRight");
    if(right.innerHTML == "RESET"){
      document.getElementById("btnRight").classList.remove("reset");
      document.getElementById("btnRight").classList.add("split");
      right.innerHTML = "SPLIT";
    } else{
      document.getElementById("btnRight").classList.remove("split");
      document.getElementById("btnRight").classList.add("reset");
      right.innerHTML = "RESET";
    }
  }

  function run(left){
    var minD = document.getElementById("minDec").innerHTML;
    var minC = document.getElementById("minCen").innerHTML;
    var secD = document.getElementById("secDec").innerHTML;
    var secC = document.getElementById("secCen").innerHTML;
    var cS, dS, cM, dM;
    if(left == "STOP"){
      //CSeconds
      cS = setInterval(function(){
        if(secC == 9){
          secC = 0;
        } else{
          secC++;
        }
        document.getElementById("secCen").innerHTML = secC;
      }, 1000);
      //DSeconds
      dS = setInterval(function(){
        if(secD == 5){
          secD = 0;
        } else{
          secD++;
        }
        document.getElementById("secDec").innerHTML = secD;
      }, 10 * 1000);
      //CMinutes
      cM = setInterval(function(){
        if(minC == 9){
          minC = 0;
        } else{
          minC++;
        }
        document.getElementById("minCen").innerHTML = minC;
      }, 60 * 1000);
      //DMinutes
      dM = setInterval(function(){
        if(minD == 5){
          minD = 0;
        } else{
          minD++;
        }
        document.getElementById("minDec").innerHTML = minD;
      },  10 * 60 * 1000);

    } else{
      console.log("Entro!");
      clearInterval(cS);
      clearInterval(dS);
      clearInterval(cM);
      clearInterval(dM);
    }
  }
