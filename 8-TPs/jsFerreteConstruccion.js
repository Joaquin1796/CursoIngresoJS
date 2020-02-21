/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    var alambre;
    var largo;
    var ancho;
    var terreno;


    largo = parseInt(document.getElementById("Largo").value);

    ancho = parseInt(document.getElementById("Ancho").value);

    terreno = largo * 2 + ancho * 2;

    alambre = terreno * 3;

    alert("La cantidad de alambre es " + alambre + " m.");

}

function Circulo() {
    var alambre;
    var radio;
    var terreno;


    radio = parseInt(document.getElementById("Radio").value);

    terreno = radio *2 * 3.14;

    alambre = terreno * 3;

    alert("La cantidad de alambre es " + alambre + " m.");
}

function Materiales() {

    var materiales;
    var largo;
    var ancho;
    var terreno;
    var cemento;
    var cal;


    largo = parseInt(document.getElementById("Largo").value);

    ancho = parseInt(document.getElementById("Ancho").value);

    terreno = largo * 2 + ancho * 2;

    cemento = terreno *2;

    cal = terreno *3;

    alert("Los materiales son, cal: " + cal + " cemento : " + cemento)



}