
function hesapla(){
    var sayi=document.getElementById("kenar").value;
    sayi=Number(sayi);
    var alan=sayi*sayi;
    var cevre=sayi*4;
    alert("Karenin alanı:"+alan+" \n Karenin çevresi:"+cevre);
    }
    var hesapBtn=document.getElementById("hesapla");
    hesapBtn.onclick=hesapla;