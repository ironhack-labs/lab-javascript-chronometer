// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
  var buttonLeft = document.querySelector('#btnLeft');
  var buttonRight = document.querySelector('#btnRight');
  if(buttonLeft.innerHTML == 'START'){
    startClick();
    buttonLeft.innerHTML = 'STOP';
    buttonLeft.setAttribute("class","btn stop");
    buttonRight.innerHTML = 'SPLIT';
    buttonRight.setAttribute("class","btn split");
    // Hago lo que tenga que hacer START
    console.log("Left button clicked");
  }else{
    // Hago lo que tenga que hacer STOP
    stopClick();
    buttonLeft.innerHTML = 'START';
    buttonLeft.setAttribute("class","btn start");
    buttonRight.innerHTML = 'RESET';
    buttonRight.setAttribute("class","btn reset");
  }
  });

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  console.log("Right button clicked");
  if(document.querySelector('#btnLeft').innerHTML == 'RESET'){
    // Hago lo que tenga que hacer RESET
    console.log("Left button clicked");
  }else{
    // Hago lo que tenga que hacer SPLIT
  }
});
