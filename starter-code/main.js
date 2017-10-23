var reloj = new Chronometer(0, 0);

console.log("esto vale mi objeto en el main" );
console.log(reloj);
// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
 reloj.startClick();

});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  console.log("Right button clicked");
});
