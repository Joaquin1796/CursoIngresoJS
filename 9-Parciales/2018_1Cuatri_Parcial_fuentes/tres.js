function mostrar()
{

    var precio;
    var descuento;
    var preciofinal;
    var porcentajeDes;

    precio = parseInt(prompt("Ingrese el precio"));
    descuento = parseInt(prompt("Ingrese el porsentaje de descuento"));
    
    porcentajeDes = precio * descuento / 100
    preciofinal = precio - porcentajeDes

    document.getElementById("elPrecioFinal").value = preciofinal;

}
