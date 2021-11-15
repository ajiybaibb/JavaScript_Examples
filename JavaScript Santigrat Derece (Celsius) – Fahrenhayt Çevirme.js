   function hesapla(){
    var sayi=document.getElementById("derece").value;
    sayi=Number(sayi);
    var fhr=(sayi*1.8)+32;
    alert(sayi+"derece="+fhr.toFixed(3)+" Fahrenheit'dir");
    }
    var hesapBtn=document.getElementById("hesapla");
    hesapBtn.onclick=hesapla;