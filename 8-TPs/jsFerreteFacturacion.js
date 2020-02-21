/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;

    precioUno = parseInt(document.getElementById("PrecioUno").value);

    precioDos = parseInt(document.getElementById("PrecioDos").value);

    precioTres = parseInt(document.getElementById("PrecioTres").value);

    suma = precioUno + precioDos + precioTres;

    alert("La suma es " + suma);
    
}   


function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;
    var promedio;

    precioUno = parseInt(document.getElementById("PrecioUno").value);

    precioDos = parseInt(document.getElementById("PrecioDos").value);

    precioTres = parseInt(document.getElementById("PrecioTres").value);

    suma = precioUno + precioDos + precioTres;

    promedio = suma / 3;


    alert("El promedio es " + promedio);
}


function PrecioFinal () 

{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;
    var preciofinal;

    precioUno = parseInt(document.getElementById("PrecioUno").value);

    precioDos = parseInt(document.getElementById("PrecioDos").value);

    precioTres = parseInt(document.getElementById("PrecioTres").value);

    suma = precioUno + precioDos + precioTres;

    preciofinal = suma + suma * 21 / 100


	alert("El precio mas IVA es " + preciofinal);
}