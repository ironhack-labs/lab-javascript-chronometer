// Instanciamos el cronómetro, llamando a la función constructora Chronometer 
// y creando un nuevo objeto cronómetro
var myChrono = new Chronometer("btnLeft", "btnRight", "sphere");


// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
  switch(myChrono.status) {
    case "Stopped":
      console.log("Left button clicked option START");
      myChrono.startClock();
      break; 
    case "Running":
      console.log("Left button clicked option STOP");
      myChrono.stopClock();
      break;
    default:
    console.log("Left button clicked SOMETHING WENT WRONG");
  }
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  switch(document.getElementById("btnRight").className) {
    case "btn split":
      console.log("Right button clicked option: SPLIT");
      myChrono.getSplitTime();
      break;
    case "btn reset":
      console.log("Right button clicked option: RESET");
      myChrono.doReset();
      break;
    default:
    console.log("Right button clicked SOMETHING WENT WRONG");
  }
});
