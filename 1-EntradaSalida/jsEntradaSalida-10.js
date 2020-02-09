/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe
    var porcentaje
    var descuento
    var resultado

    importe = parseInt(document.getElementById("importe").value);   
    porsentaje = (importe * 25 / 100);
    descuento = (importe - porsentaje);
    resultado = descuento;  

    document.getElementById("resultado").value = resultado;
    
}   

