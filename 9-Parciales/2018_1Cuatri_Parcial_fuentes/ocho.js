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
        while (!(isNaN(letra))) {
            letra = prompt("Eso es una letra. Ingrese una letra");
        }
        if (numero % 2 == 0) {
            acumulaPar++;

        } else if (numero % 2 != 0) {
            acumulaImp++;
        }
/*
        if (numero > 0) {
            acumulaPos = acumulaPos + numero;
            contadorPos++;

        } else if (numero < 0) {
            acumulaNeg = acumulaNeg + numero;
            contadorNeg++;

        } else {
            acumulaCeros++;
        }

        if (numero < maximo || flag == 0) {
            maximo = numero;
            letraMax = letra;
            flag = 1;
        }
        if (numero > minimo || flag == 0) {
            minimo = numero;
            letraMin = letra;
            flag = 1;
        }
      */  
        seguir = prompt("DESEA CONTINUAR?");
    } while  (seguir == 's');

        
   promedioPos = acumulador / contadorPos;


alert("A-- "+acumulaPar+" B-- "+acumulaImp+" C-- "+acumulaCeros+" D-- "+promedioPos+" E-- "+acumulaNeg);


/*
    alert("a) La cantidad de números pares. " + acumulaPar + "<br/>" +
        " b) La cantidad de números impares. " + acumulaImp + "<br/>" +
        " c) La cantidad de ceros. " + acumulaCeros + " <br/>" +
        " d) El promedio de todos los números positivos ingresados. " + promedioPos + "<br/>" +
        " e) La suma de todos los números negativos. " + acumulaNeg + "<br/>" +
        " f) El número y la letra del máximo y el mínimo. " + maximo + "y" + letraMax + "  " + minimo + " y " + letraMin);
*/
}




