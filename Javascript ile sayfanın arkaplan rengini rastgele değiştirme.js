var dizi=["#D24D57","#e74c3c","#f1c40f","#2c3e50","#8e44ad","#bdc3c7","#1abc9c","#3498db","#95a5a6"];
var renk=document.getElementById("renk");


renk.onclick=function(){

var rasgele=Math.floor(Math.random()*dizi.length);

document.body.style.backgroundColor=dizi[rasgele];

}