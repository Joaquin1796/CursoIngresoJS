function mostrar()
{
    var nombre;
    var peso;
    var temperatura;
    var seguir;
    var contadorTemPares = 0;
    var pesoPesado;
    var nombrePesado;
    var temperaturaPesada;
    var flag = 0;
    var flag1 = 0;
    var flag2 = 0;
    var contadorBajoCero = 0;
    var acumuladorPeso = 0;
    var contadorPeso = 0;
    var promedioPeso;
    var pesoMaximo;
    var pesoMinimo;



    do {
        
        nombre = prompt("Ingrese le nombre del animal");

        peso = parseInt(prompt("Ingrese el peso del animal"));
        while ( peso < 1 || peso > 1000 || isNaN(peso) ) { 
            peso = parseInt(prompt("Peso incorrecto. Ingrese el peso del animal"));
        }

        temperatura = parseInt(prompt("Ingrese la temperatura del hábitat."));
        while ( temperatura < -30 || temperatura > 30 || isNaN(temperatura) ) {
            temperatura = parseInt(prompt("Temperatura incorrecta. Ingrese la temperatura del hábitat."));
        }

        //------------A-----------
        if ( temperatura % 2 == 0 ) {
            contadorTemPares++;
        }
        //------------B-----------
        if (flag == 0 || peso > pesoPesado) {
            pesoPesado = peso;
            temperaturaPesada = temperatura;
            nombrePesado = nombre;
            flag = 1;
        }
        //-------------C-----------
        if ( temperatura < 0) {
            contadorBajoCero++;
        }
        //--------------D-----------
        if ( peso ) {
            acumuladorPeso += peso;
            contadorPeso++;
        }
        //--------------F---------
        if ( (flag1 == 0 || peso > pesoMaximo) && temperatura < 0) {
            pesoMaximo = peso;
            flag1 == 1;
        }
        if ( (flag2 == 0 || peso < pesoMinimo) && temperatura < 0) {
            pesoMinimo = peso;
            flag2 == 1;
        } 

        seguir = prompt("DESEA CONTINUAR?");
    } while  (seguir == 's'|| seguir == 'S'); 


promedioPeso = acumuladorPeso / contadorPeso;

document.write("La cantidad de temperaturas pares  "+ contadorTemPares +"<br/>");
document.write("El nombre y temperatura del animal más pesado "+ nombrePesado + " y "+ temperaturaPesada +"<br/>");
document.write("La cantidad de animales que viven a menos de 0 grados "+ contadorBajoCero +"<br/>");
document.write("El promedio del peso de todos los animales "+ promedioPeso +"<br/>");
document.write("El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero "+ pesoMaximo + " y " + pesoMinimo +"<br/>");


}

/*
a) La cantidad de temperaturas pares.
b) El nombre y temperatura del animal más pesado
c) La cantidad de animales que viven a menos de 0 grados.
d) El promedio del peso de todos los animales.
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
*/