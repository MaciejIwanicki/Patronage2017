"use strict";
var myVar = setInterval(function () { myTimer()}, 30000);
function myTimer() {
    document.getElementById("clickCount").innerHTML = 0;
    count = 0;
}
