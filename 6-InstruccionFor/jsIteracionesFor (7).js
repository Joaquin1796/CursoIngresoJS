function mostrar()
{
    var numero;
    var contadorDivisores = 0;

    numero = parseInt(prompt("Ingrese un numero"));
    while (isNaN(numero)){
    numero = parseInt(prompt("Ingrese un numero"));
    }
    for (var i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            console.log(i);
            contadorDivisores++;
        }
    }

console.log("Divisores encontrados: " + contadorDivisores);


}//FIN DE LA FUNCIÓN

/*
Para allar dividores
numero % i == 0

Para allar pares
numero % 2 == 0

Para allar impares
numero % 2 != 0
*/