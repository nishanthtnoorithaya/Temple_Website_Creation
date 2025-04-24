"use strict";

var now = new Date();
var date = now.toLocaleDateString();
var time = now.toLocaleTimeString();

if (date == "16/3/2022") {
  window.location.href = "https://www.google.co.in";
} else {
  window.location.href = "https://www.karayatemple.org";
}