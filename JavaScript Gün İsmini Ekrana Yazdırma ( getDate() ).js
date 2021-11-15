var d = new Date();
document.getElementById("deneme").innerHTML = d.getDay();
var d = new Date();
var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
document.getElementById("test").innerHTML = gunler[d.getDay()];