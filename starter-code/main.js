// Instanciamos el cronómetro, llamando a la función constructora Chronometer 
// y creando un nuevo objeto cronómetro
var myChrono = new Chronometer("btnLeft", "btnRight", "sphere");


// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
  console.log("Left button clicked");
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  console.log("Right button clicked");
});
