const handhour = document.querySelector(".clock .handhour");
const handminute = document.querySelector(".clock .handminute");
const handsecond = document.querySelector(".clock .handsecond");

function moveHands() {
  var date = new Date();
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();

  // hands positions according to current time 
  var secHandPos = (360 / 60) * seconds;
  var mintHandPos = (360 / 60) * minutes;
  var hrHandPos = (360 / 12) * hours;

  // one rotation = 360 deg and 60 seoconds || so 1s = 6 degree
  // rotate 6 degree after one second
  secHandPos = 6 + secHandPos;

  // one rotation = 60 minutes (3600s) and 360 degree
  // so for after passing 1 second (3600/3600); add (360/3600) degree in minute;
  mintHandPos = mintHandPos + 1 / 10;

  // one rotation = 12 hours (12*3600s) and 360 degree
  // so after passing 1s (12*3600/12*3600); add (360/12*3600) degree in hours;
  hrHandPos = hrHandPos + 1 / 120;

  handsecond.style.setProperty("--rotation", secHandPos);
  handminute.style.setProperty("--rotation", mintHandPos);
  handhour.style.setProperty("--rotation", hrHandPos);
}

setInterval(() => {
  moveHands();
}, 1000);

moveHands();
