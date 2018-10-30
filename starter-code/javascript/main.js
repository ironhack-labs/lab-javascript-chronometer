window.onload = function (){
  let btnLeft  = document.getElementById('btnLeft');
  let btnRight = document.getElementById('btnRight');
  btnLeft.onclick = function(){
    if (btnLeft.innerHTML === "START"){
      chronometer.startStopwatch();
      btnLeft.style.backgroundColor = "#f14949";
      btnLeft.innerHTML = "STOP";
      btnLeft.classList.remove(".btn.start");
      btnRight.style.backgroundColor = "#0851ab";
      btnRight.classList.remove(".btn.reset");
      btnRight.innerHTML = "SPLIT";
    }   
    else if (btnLeft.innerHTML === "STOP"){
      chronometer.stopStopwatch();
      btnRight.style.backgroundColor = "#908e8e";
      btnRight.innerHTML = "RESET";
    }
  
  }
  
  btnRight.onclick = function (){
    if (btnRight.innerHTML === "SPLIT"){
      chronometer.split();
    }
    if (btnRight.innerHTML === "RESET") {
      chronometer.reset();
      btnLeft.innerHTML = "START";
      btnLeft.style.backgroundColor = "#5fca5f";
    }
  }

}