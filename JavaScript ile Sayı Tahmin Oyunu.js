var sayi,tahmin,hak=1,i=0;;
sayi=Math.round(Math.random()*100);
do
{
    tahmin=parseInt(prompt("Tahmini Giriniz: "));
    if (tahmin<sayi)
    {
        document.write("Daha büyük bir sayı giriniz.<br>"); 
    }
    if (tahmin>sayi)
    {
        document.write("Daha küçük bir sayı giriniz.<br>"); 
    }
    if (tahmin==sayi)
    {
    document.write("Tebrikler bildiniz. Tuttuğum sayı: "+ sayi + "<br>");
    document.write(hak + ". hakkınızda bildiniz."); 
    }
hak++;
}
while ((tahmin!=sayi) && hak<10)
if (hak>10)
{
    document.write("Hakkınız kalmadı. Tutulan sayı : "+ sayi + "<br>");
}