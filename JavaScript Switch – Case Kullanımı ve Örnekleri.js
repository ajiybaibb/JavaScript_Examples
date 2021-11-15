function GunBul(){
    var gun=new Date().getDay();
    switch (gun) {
    case 0:
    day = "PAZAR";
    break;
    case 1:
    day = "PAZARTESİ";
    break;
    case 2:
    day = "SALI";
    break;
    case 3:
    day = "ÇARŞAMBA";
    break;
    case 4:
    day = "PERŞEMBE";
    break;
    case 5:
    day = "CUMA";
    break;
    case 6:
    day = "CUMARTESİ";
    }
    document.getElementById("goster").innerHTML = day;
    }
    var text;
    switch (new Date().getDay()) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            text = "Hafta ici";
            break;
        case 0:
        case 6:
            text = "Hafta sonu";
            break;
        default:
            text = "Tanımsız";
    }
    document.getElementById("demo").innerHTML = text;