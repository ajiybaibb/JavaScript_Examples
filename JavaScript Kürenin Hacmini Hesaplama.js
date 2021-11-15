
function hesapla(){
    var sayi=document.getElementById("yaricap").value;
    sayi=Number(sayi);
    var hacim=(4*Math.PI*sayi*sayi*sayi)/3;
    hacim=hacim.toFixed(2);
    alert("Kürenin Hacmi: "+hacim +" birim küp");
    }
    var hesapBtn=document.getElementById("hesapla");
    hesapBtn.addEventListener('click',hesapla,false);
