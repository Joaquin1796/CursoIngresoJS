function mostrar()
{
var flag = 0;
var sexo;
var nota;
var acumuladorNota = 0;
var promedioNota;
var notaBaja;
var sexobajo;
var cantidadvaron6 = 0;


for ( var i = 0; i < 5; i++) { 

    nota = parseInt(prompt("Ingrese una nota (0-10)"));
    while ( nota < 0 || nota > 10 || isNaN(nota) ) {
        nota = parseInt(prompt("Nota invalida. Ingrese una nota (0-10)"));
    }
     
    sexo = prompt("Ingrese un sexo (m-f)");
    while ( sexo != 'm' && sexo != 'f' ) {
        sexo = prompt("Sexo invalido. Ingrese un sexo (m-f)");
    } 
    acumuladorNota = acumuladorNota + nota;
                
    if (nota < notaBaja || flag == 0) {
        notaBaja = nota;
        sexoBajo = sexo;
        flag = 1;
    }
    if ( nota >= 6 && sexo == 'm') {
        cantidadvaron6 ++
    }
}     
    promedioNota = acumuladorNota / 5;


    alert("El promedio de notas totales es " + promedioNota + "<br/>" +
    " La nota mas baja es " + notaBaja + " y su sexo es " + sexobajo + "<br/>" + 
    " Cantidad de varones que su nota es mayor o igual a 6 son " + cantidadvaron6);




}
