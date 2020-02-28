function mostrar()
{
var sexo;
var nota;
var acumuladorNota;
var acumuladorSexo;

for ( var i = 0; i < 5; i++) { 

    nota = parseInt(prompt("Ingrese una nota (0-10)"));
    while ( nota < 0 || nota > 10 || isNaN(nota) ) {
        nota = parseInt(prompt("Nota invalida. Ingrese una nota (0-10)"));
     }

    sexo = prompt("Ingrese un sexo (m-f)");
    while ( sexo != 'm' && sexo != 'f' ) {
        sexo = prompt("Sexo invalido. Ingrese un sexo (m-f)");
    } 
}
    






}
