function hesapla(){
    var kk=document.getElementById("kisa").value;
    var uk=document.getElementById("uzun").value;
    kk=Number(kk);
    uk=Number(uk);
    var alan=kk*uk;
    var cevre=(kk+uk)*2;
    alert("Dikdörtgen alanı:"+alan+" \n Dikdörtgen çevresi:"+cevre);
    }
    var hesapBtn=document.getElementById("hesapla");
    hesapBtn.onclick=hesapla;