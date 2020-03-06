function mostrar() {
    var continente;
    var formaPago;
    var tarifa = 100;
    var descuento;
    var costo;

    continente = document.getElementById("selecContinente").Value;

    formaPago = document.getElementById("selecPago").Value;


    switch (continente && formaPago) {
        case "America":
        case "Débito":
            descuento = tarifa * 25 / 100;
            costo = tarifa - descuento;
            alert("El costo del viaje es $ " + costo);
            break;








    }


        document.write(costo);




}
