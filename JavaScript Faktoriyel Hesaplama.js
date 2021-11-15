function hesapla(){
    var faktoriyel=1;
    var sayi=document.getElementById("sayi").value;
    sayi=Number(sayi);
    if(sayi>=0)
    {
    for(var i=1;i<=sayi;i++)
    {
    faktoriyel=faktoriyel*i;
    }
    window.alert(sayi+" sayisinin faktöriyeli "+faktoriyel);
    }
    }
    var hesapBtn=document.getElementById("hesapla");
    hesapBtn.onclick=hesapla;