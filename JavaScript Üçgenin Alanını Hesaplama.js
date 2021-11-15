function hesapla(){
    var sayi1=document.getElementById("kenar1").value;
    var sayi2=document.getElementById("kenar2").value;
    sayi1=Number(sayi1);
    sayi2=Number(sayi2);
    var alan=sayi1*sayi2/2;
    alert("Üçgenin alanı:"+alan);
    }
    var hesapBtn=document.getElementById("hesapla");
    hesapBtn.onclick=hesapla;
     