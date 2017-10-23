// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
  if(document.querySelector('#btnLeft').innerHTML == 'START'){
    // Hago lo que tenga que hacer START
    console.log("Left button clicked");
  }else{
    // Hago lo que tenga que hacer STOP
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
});
