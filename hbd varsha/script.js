var ziel = new Date("august 07, 2017 00:00:00");
var jetzt = new Date();
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var distance;
var days;
var hours;
var minutes;
var seconds;

setInterval(function(){
  jetzt = new Date();
  distance = ziel - jetzt;
  days = Math.floor(distance / _day);
	hours = Math.floor((distance % _day) / _hour);
	minutes = Math.floor((distance % _hour) / _minute);
	seconds = Math.floor((distance % _minute) / _second);
  document.getElementById("d").innerHTML = days;
  document.getElementById("h").innerHTML = ("0" + hours).slice(-2);
  document.getElementById("m").innerHTML = ("0" + minutes).slice(-2);
  document.getElementById("s").innerHTML = ("0" + seconds).slice(-2);
}, 1000);