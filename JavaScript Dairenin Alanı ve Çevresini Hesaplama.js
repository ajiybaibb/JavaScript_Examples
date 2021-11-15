function hesapla(){
    var sayi=document.getElementById("kenar").value;
    yaricap=Number(sayi)
    var alan=3.14*yaricap*yaricap;
    var cevre=2*3.14*yaricap;
    alert("Dairenin alanı:"+alan+" \n Dairenin çevresi:"+cevre);
    }
    var hesapBtn=document.getElementById("hesapla");
    hesapBtn.onclick=hesapla;