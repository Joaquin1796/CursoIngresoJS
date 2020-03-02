function mostrar() {

    var numero;
    var letra;
    var flag = 0;
    var acumulaPar = 0;
    var acumulaImp = 0;
    var acumulaCeros = 0;
    var promedioPos;
    var acumulaNeg = 0;
    var acumulaPos = 0;
    var contadorPos = 0;
    var contadorNeg = 0;
    var maximo;
    var minimo;
    var letraMax;
    var letraMin;
    var seguir;

    do {

        numero = parseInt(prompt("Ingrese un numero (-100 - 100)"));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt("Numero invalido. Ingrese un numero (-100 - 100)"));
        }
        letra = prompt("Ingrese una letra");
        while (!((letra >= 'A' && letra <= 'Z') || (letra >= 'a' && letra <= 'z'))) {
            letra = prompt("Eso es una letra. Ingrese una letra");
        }
        if (numero % 2 == 0) {
            acumulaPar++;

        } else {
            acumulaImp++;
        }

        if (numero > 0) {
            acumulaPos = acumulaPos + numero;
            contadorPos++;

        } else if (numero < 0) {
            acumulaNeg = acumulaNeg + numero;
            contadorNeg++;

        } else {
            acumulaCeros++;
        }

        if (numero > maximo || flag == 0) {
            maximo = numero;
            letraMax = letra;
            
        }
        if (numero < minimo || flag == 0) {
            minimo = numero;
            letraMin = letra;
            flag = 1;
        }
        
        seguir = prompt("DESEA CONTINUAR?");
    } while  (seguir == 's');

   if ( contadorPos != 0 )  {    
   promedioPos = acumulaPos / contadorPos;
   }



   document.write("a) La cantidad de números pares. " + acumulaPar + "<br/>");
   document.write("b) La cantidad de números impares. " + acumulaImp + "<br/>");
   document.write("c) La cantidad de ceros. " + acumulaCeros + " <br/>");
   document.write("d) El promedio de todos los números positivos ingresados. " + promedioPos + "<br/>");
   document.write("e) La suma de todos los números negativos. " + acumulaNeg + "<br/>");
   document.write("f) El número máximo y su letra. " + maximo + " y " + letraMax + "<br/>" );
   document.write("f) El número minimo y su letra. " + minimo + " y " + letraMin);

}



//while (!(isNaN(letra)))
