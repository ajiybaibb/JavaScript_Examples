var paraListe=[1,2,5,10,15,25 ,50 ,100 ,400 ,500 ,750 ,1000 ,2500 ,5000 ,10000 ,15000 ,20000 ,25000 ,50000 ,150000 ,250000 ,500000 ,500000,500000];
var paraAcilan=[];
var karisikListe=paraListe.slice();
	karistir(karisikListe);
var kutum=null;
var sayac=1;

$(".para").each(function(index, element) {
    
	if(paraListe[index]<1000)
	{
		$(element).addClass("mavi").html(paraListe[index]);
		
	}
	else if(paraListe[index]<100000)
	{
		$(element).addClass("sari").html(paraListe[index]);
	}
	else
	{
		$(element).addClass("kirmizi").html(paraListe[index]);
	}
});


$(".kutu").each(function(index, element) {
    $(element).html(index+1);
});


$(".kutu").click(function(){
	
	var secilenKutuNo=Number($(this).html());
	if(kutum==null)
	{
		$(this).css({"background":"#CD2847"});
		kutum=secilenKutuNo;
	}
	else if(kutum != secilenKutuNo)
	{
		$(this).css({"background":"#3E3033"});
		var kutuno=Number($(this).html()-1);
		$(this).html(karisikListe[kutuno]);
		$(".para-agaci .para:contains("+karisikListe[kutuno]+")").first().html("").css({"background":"#202000"});
		sayac++;
		paraAcilan.push(+karisikListe[kutuno]);
	}
	
	if(paraAcilan.length==23)
	{
		alert("KUTUNUZDAKİ PARA:"+karisikListe[kutum-1]);
		location.reload();
		return false;
	}
	
	if(sayac%3==0)
	{
		
		$(".hamdi h1").html("HAMDİ BEY:"+hamdiBey(paraListe,paraAcilan));
		var kabul=window.confirm("Teklifi Kabul ediyormusunuz");
		if(kabul)
		{
			alert("KUTUNUZDAKİ PARA:"+karisikListe[kutum-1]);
			location.reload();
			return false;
		}
	}
	
	
});

function karistir(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}

function hamdiBey(liste,para)
{
	
	var p1=0;
	var p2=0;
	for(i in para)
	{
	p1=p1+para[i];	
	
	}
	
	for(i in liste)
	{
	p2=p2+liste[i];	
	}
	return ((p1-p2)/(para.length-liste.length)).toFixed(0);
	
}