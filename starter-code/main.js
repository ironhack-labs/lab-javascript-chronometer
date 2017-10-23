var crono = new Crono();

var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");

// Start/Stop Button
btnLeft.addEventListener("click", function () {
  if(btnLeft.className == "btn start") {
    crono.startClick();
  } else {
    crono.stopClick();
  }
});

// // Reset/Split Button
// btnRight.addEventListener("click", function () {
//   if(btnRight.className == "btn reset") {
//     btnRight.className = "btn split";
//     btnRight.innerHTML = "SPLIT";
//   } else {
//     btnRight.innerHTML = "RESET";
//     btnRight.className ="btn reset";
//   }
// });
