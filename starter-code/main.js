
var s = document.getElementById("secCen");
var s2 = document.getElementById("secDec");
var m = document.getElementById("minCen");
var m2 = document.getElementById("minDec");
var leftButton = document.getElementById("btnLeft");
var rightButton = document.getElementById("btnRight");
var setIntervalId;
leftButton.addEventListener("click", function () {
  if(this.innerHTML === "START"){
    startClick();
  }else{
    stopClick();
  }
});
rightButton.addEventListener("click", function () {
  console.log("Right button clicked");
});
//--------Chronometer Functions---------------
function startClick(){
  leftButton.className = "btn stop";
  leftButton.innerHTML = "STOP";
  rightButton.className = "btn split";
  rightButton.innerHTML = "SPLIT";

  setInterval(function(){

    s.innerHTML = Number(s.innerHTML) + 1;
    if(Number(s.innerHTML) === 10){
      s.innerHTML = 0;
      s2.innerHTML = Number(s2.innerHTML) + 1;
    }
    if(Number(s2.innerHTML) === 6 && Number(s.innerHTML) === 0){
      s2.innerHTML = 0;
      m.innerHTML = Number(m.innerHTML) + 1;
    }
    if(Number(m.innerHTML) === 10){
      m.innerHTML = 0;
      m2.innerHTML = Number(m2.innerHTML) + 1;
    }
  }, 1000);
}

function stopClick(){
  leftButton.className = "btn start";
  leftButton.innerHTML = "START";
  rightButton.className = "btn reset";
  rightButton.innerHTML = "RESET";
  // clearInterval(setIntervalId);
}
