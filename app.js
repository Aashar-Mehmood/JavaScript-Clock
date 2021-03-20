const handhour = document.querySelector('.clock .handhour');
const handminute = document.querySelector('.clock .handminute');
const handsecond = document.querySelector('.clock .handsecond');



setInterval(clockFun, 1000);

function clockFun() {

var date = new Date();

var secondsRatio = date.getSeconds()/60;
var minutesRatio = (secondsRatio+date.getMinutes())/60;
var hoursRatio = (minutesRatio+date.getHours())/12;

handsecond.style.setProperty('--rotation', secondsRatio*360);
handminute.style.setProperty('--rotation', minutesRatio*360);
handhour.style.setProperty('--rotation', hoursRatio*360);

}

clockFun();