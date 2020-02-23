/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
//con switch e if else.

function CalcularPrecio() {
    var precioUnidad = 35;
    var precioTotal;
    var cantidad;
    var marca;
    var descuento;
    var precioConDescuento;
    var importeFinal;
    var IIBB;

    cantidad = parseInt(document.getElementById("Cantidad").value);

    marca = document.getElementById("Marca").value;


    if (cantidad >= 6) {
        precioTotal = precioUnidad * cantidad
        descuento = precioTotal * 50 / 100
        precioConDescuento = precioTotal - descuento
        importeFinal = precioConDescuento
    }

    switch (marca) {
        case "ArgentinaLuz":
            if (cantidad == 5) {
                precioTotal = precioUnidad * cantidad
                descuento = precioTotal * 40 / 100
                precioConDescuento = precioTotal - descuento
                importeFinal = precioConDescuento
            } else if (cantidad == 4) {
                precioTotal = precioUnidad * cantidad
                descuento = precioTotal * 25 / 100
                precioConDescuento = precioTotal - descuento
                importeFinal = precioConDescuento
            } else if (cantidad == 3) {
                precioTotal = precioUnidad * cantidad
                descuento = precioTotal * 15 / 100
                precioConDescuento = precioTotal - descuento
                importeFinal = precioConDescuento
            }
            break;
 
        case ("FelipeLamparas"):
            if (cantidad == 5) {
                precioTotal = precioUnidad * cantidad
                descuento = precioTotal * 30 / 100
                precioConDescuento = precioTotal - descuento
                importeFinal = precioConDescuento
            } else if (cantidad == 4) {
                precioTotal = precioUnidad * cantidad
                descuento = precioTotal * 25 / 100
                precioConDescuento = precioTotal - descuento
                importeFinal = precioConDescuento
            } else if (cantidad == 3) {
                precioTotal = precioUnidad * cantidad
                descuento = precioTotal * 10 / 100
                precioConDescuento = precioTotal - descuento
                importeFinal = precioConDescuento
            }
            break;

        case "JeLuz":
            if (cantidad == 5) {
                precioTotal = precioUnidad * cantidad
                descuento = precioTotal * 30 / 100
                precioConDescuento = precioTotal - descuento
                importeFinal = precioConDescuento
            } else if (cantidad == 4) {
                precioTotal = precioUnidad * cantidad
                descuento = precioTotal * 20 / 100
                precioConDescuento = precioTotal - descuento
                importeFinal = precioConDescuento
            } else if (cantidad == 3) {
                precioTotal = precioUnidad * cantidad
                descuento = precioTotal * 5 / 100
                precioConDescuento = precioTotal - descuento
                importeFinal = precioConDescuento
            }
            break;

        case "HazIluminacion":
            if (cantidad == 5) {
                precioTotal = precioUnidad * cantidad
                descuento = precioTotal * 30 / 100
                precioConDescuento = precioTotal - descuento
                importeFinal = precioConDescuento
            } else if (cantidad == 4) {
                precioTotal = precioUnidad * cantidad
                descuento = precioTotal * 20 / 100
                precioConDescuento = precioTotal - descuento
                importeFinal = precioConDescuento
            } else if (cantidad == 3) {
                precioTotal = precioUnidad * cantidad
                descuento = precioTotal * 5 / 100
                precioConDescuento = precioTotal - descuento
                importeFinal = precioConDescuento
            }
            break;

        case "Osram":
            if (cantidad == 5) {
                precioTotal = precioUnidad * cantidad
                descuento = precioTotal * 30 / 100
                precioConDescuento = precioTotal - descuento
                importeFinal = precioConDescuento
            } else if (cantidad == 4) {
                precioTotal = precioUnidad * cantidad
                descuento = precioTotal * 20 / 100
                precioConDescuento = precioTotal - descuento
                importeFinal = precioConDescuento
            } else if (cantidad == 3) {
                precioTotal = precioUnidad * cantidad
                descuento = precioTotal * 5 / 100
                precioConDescuento = precioTotal - descuento
                importeFinal = precioConDescuento
            }
            break;
            
    }
      

    if (precioConDescuento >= 120) {
        IIBB = precioConDescuento * 10 /100
        importeFinal = IIBB + precioConDescuento

        document.getElementById("precioDescuento").value = importeFinal
        alert("Usted pago 10% mas de IIBB, siendo " + precioConDescuento + " el total SIN el impuesto");
    } 




    //document.getElementById("precioDescuento").value = precioConDescuento
    document.getElementById("precioDescuento").value = importeFinal

}



 


