function mostrar() {


    var hora;

    hora = parseInt(document.getElementById("laHora").value);


    if (hora >= 00 && hora < 24) {

      switch (hora) {
        case 06:
        case 07:
        case 08:
        case 09:
        case 10:
        case 11:
            alert("Es de mañana");
            break;
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            alert("Es de tarde");
            break;
        case 20:
        case 21:
        case 22:
        case 23:
            alert("Es de noche, a dormir");
            break;
        case 00:    
        case 01: 
        case 02:
        case 03: 
        case 04:
        case 05:
            alert("Es de madrugada");
            break;
      }
    }else {
        alert("Hora invalida. Ingrese bien la hora.");
    }



}
