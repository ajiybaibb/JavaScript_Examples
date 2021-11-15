var text="";
var sayi=0;

function asalHesapla()
{
var sayac=0;
sayi=document.getElementById('sayi1').value;
for(i=2; i<sayi; i++)
 {
	if(sayi%i==0)
	{
	sayac++;
	}
 }
	if(sayac==0)
	{
	text="Asal";
	}
	else
	{
	text="Asal değil.<br/> 1 ve Kendisi hariç <strong>"+sayac+"</strong> adet böleni var";
	}
 document.getElementById('demo').innerHTML = text;
 }