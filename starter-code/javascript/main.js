const appleWatch = new Chronometer ();
let buttonStop; let buttonSplit
// Selectionner des Elements 
const olContainer = document.getElementById('splits');
const updateSecondUni = document.getElementById('secUni');
const updateSecondDec = document.getElementById('secDec');
const updateMinuteUni = document.getElementById('minUni');
const updateMinuteDec = document.getElementById('minDec');
const updateMilUni = document.getElementById('milUni');
const updateMilDec = document.getElementById('milDec');
const buttonStart = document.querySelector('.btn.start');
const buttonReset = document.querySelector('.btn.reset');
// Rattacher les buttons avec des Evenements 
buttonStart.onclick = appleWatch.startClick;