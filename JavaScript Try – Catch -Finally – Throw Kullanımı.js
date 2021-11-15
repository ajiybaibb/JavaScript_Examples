var nesne =document.getElementById("tc");
    var uyari =document.getElementById("uyari");
     
    nesne.onkeypress=function(){
    uyari.textContent="";
    }
     
    nesne.onblur=function(){
     
    try{
    if(isNaN(nesne.value)) throw "Hatalı karakter girdiniz."; 
    if(nesne.value.length<11) throw "11 karakterden az girdiniz.";
    if(nesne.value.length>11) throw "11 karakterden fazla girdiniz.";
    }
    catch(e)
    {
    uyari.textContent=e;
    nesne.focus();
    }
     
    } 