function hesapla(){
    var sayi=document.getElementById("uzunluk").value;
    sayi=Number(sayi);
    var mil=0.621*sayi;
    alert(sayi+"km="+mil.toFixed(2)+"mil'dir");
    }
    var hesapBtn=document.getElementById("hesapla");
    hesapBtn.onclick=hesapla;