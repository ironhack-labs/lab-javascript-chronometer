var chrono = new Chronometer();

// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
  console.log("Left button clicked");
  if (!chrono.started) {
    chrono.start();
    document.getElementById("btnLeft").innerHTML = "STOP";
    document.getElementById("btnLeft").setAttribute('class', 'btn stop');

    document.getElementById("btnRight").innerHTML = "SPLIT";
    document.getElementById("btnRight").setAttribute('class', 'btn split');

    chrono.startCronometer();
  
  } 
  else{
    chrono.pause();
    document.getElementById("btnLeft").innerHTML = "START";
    document.getElementById("btnLeft").setAttribute('class', 'btn start');

    document.getElementById("btnRight").innerHTML = "RESET";
    document.getElementById("btnRight").setAttribute('class', 'btn reset');
    
    chrono.stop();
  }
  
});
  

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  console.log("Right button clicked");

  
});


var btnLeft = document.getElementById("btnLeft");
