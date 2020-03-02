function mostrar()
{
    var nombre;
    var sexo;
    var edad;
    var nota;
    var seguir;
    var contadorVarA = 0;
    var acumNotaMenor = 0;
    var contadorMenor = 0;
    var acumNotaAdol = 0;
    var contadorAdol = 0;
    var acumNotaMayor = 0;
    var contadorMayor = 0;
    var acumNotaMas = 0;
    var acumNotaFem = 0;
    var contadorMas = 0;
    var contadorFem = 0;
    var promedioNotaMenor = 0;
    var promedioNotaAdol = 0;
    var promedioNotaMayor = 0;
    var promedioNotaMas = 0;
    var promedioNotaFem = 0;
    var flag = 0;



    do { 
        nombre = prompt("Ingrese un nombre");

        sexo = prompt("Ingrese un Sexo");
        while ( sexo != 'f' && sexo != 'm') {
            sexo = prompt("Sexo invalido. Ingrese un sexo");
        }

        edad = parseInt(prompt("Ingrese una edad (0 - 50)"));
        while (edad < 0 || edad > 50 || isNaN(edad)) {
            edad = parseInt(prompt("Edad invalida. Ingrese una edad (0 - 50)"));
        }
        nota = parseInt(prompt("Ingrese una nota"));
        while (nota < 1 || nota > 10 || isNaN(nota)) {
            nota = parseInt(prompt("Nota invalida. Ingrese una nota"));
        }

        if ( nota > 6 && sexo == 'm' )  {
            contadorVarA++
        }

        if  ( edad >= 18 ) {
            acumNotaMayor = acumNotaMayor + nota;
            contadorMayor++;

        }else if ( edad >= 13 || edad < 18 ) {
            acumNotaAdol = acumNotaAdol + nota;
            contadorAdol++;
            if (flag == 0 || nota > mayorNotaAdolescente) {
                mayorNotaAdolescente = nota;
                nombreMayorNota = nombre;
                sexoMayorNota = sexo;
                flag = 1;
            }
    
        }else {
            acumNotaMayor = acumNotaMayor + nota;
            contadorMayor++;
        }

        if ( sexo == 'm' ) {
            acumNotaMas = acumNotaMas + nota;
            contadorMas++;
        }
       else {
            acumNotaFem = acumNotaFem + nota;
            contadorFem++;
        }
    
      
        seguir = prompt("DESEA CONTINUAR?");
    } while  (seguir == 's');

    
    if (contadorMenor != 0) {
        promedioMenor = acumNotasMenor / contadorMenor;
    }
    if (contadorMayor != 0) {
        promedioMayor = acumNotasMayor / contadorMayor;
    }
    if (contadorAdolescente != 0) {
        promedioAdolescente = acumNotasAdolescente / contadorAdolescente;
    }
    if (contadorM != 0) {
        promedioM = acumNotasM / contadorM;
    }
    if (contadorMenor != 0) {
        promedioMenor = acumNotasMenor / contadorMenor;
    }
    if (contadorF != 0) {
        promedioF = acumNotasF / contadorF;
    }





   document.write("a) La cantidad de varones aprobados: " + contadorVaronesAprob + "</br>");
   document.write("b) El promedio de notas de los menores de edad: " + promedioMenor + "</br>");
   document.write("c) El promedio de notas de los adolescentes: " + promedioAdolescente + "</br>");
   document.write("d) El promedio de notas de los mayores: " + promedioMayor + "</br>");
   document.write("e) El promedio de notas por sexo masculino: " + promedioM + " y femenino: " + promedioF + "</br>");
   if (contadorAdolescente == 0) {
       document.write("No se ingresaron adolescentes");
   }
   else {
       document.write("f) Del adolescente con mayor nota el nombre es: " + nombreMayorNota + " y tiene sexo: " + sexoMayorNota + "</br>");
   }


}

/*
a) La cantidad de varones aprobados
b) El promedio de notas de los menores de edad
c) El promedio de notas de los adolescentes.
d) El promedio de notas de los mayores
f) El promedio de notas por sexo masculino y femenino
g) Informar el nombre y el sexo de la persona con la mejor nota ADOLESCENTE.
*/