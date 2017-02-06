






function displayTime() {
  setInterval(displayTime, 1000);
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridiem = "AM";

  if (seconds < 10) {
      seconds = "0" + seconds;
  }
  if (minutes < 10) {
      minutes = "0" + minutes;
      meridiem = "PM"
  }

  if (hours > 12) {
  hours = hours - 12;
  meridiem = "PM";
}
if (hours === 0) {
  hours = 12;
}
if (hours < 10) {
  hours = "0" + hours;
}
var color = "#"+ hours + minutes + seconds;
document.body.style.background= color;
var clockDiv = document.getElementById('clock');
clockDiv.innerText = "#" + hours + minutes + seconds;

}

displayTime();
