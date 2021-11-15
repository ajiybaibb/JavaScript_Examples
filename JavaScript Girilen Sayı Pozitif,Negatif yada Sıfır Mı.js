var sayiNesne=document.getElementById("sayi");
var hesaplaBtn=document.getElementById("hesapla");
hesaplaBtn.onclick=islemYap;
function islemYap(){
var sayi=Number(sayiNesne.value);
var durumGoster=document.getElementById("durumgoster");
if(sayi<0)
{
durumGoster.innerHTML="SAYI NEGATİFTİR."; 
}
else if(sayi>0)
{
durumGoster.innerHTML="SAYI POZİTİFTİR"; 
}
else
{
durumGoster.innerHTML="SAYI SIFIRDIR"; 
}
}