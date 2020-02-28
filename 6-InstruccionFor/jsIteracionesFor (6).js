function mostrar() {
    var numero;
    var contadorPares = 0;

    numero = parseInt(prompt("Ingrese un numero"));
    while (isNaN(numero)){
    numero = parseInt(prompt("Ingrese un numero"));
    }
    for (var i = 1; i <= numero; i++) {
        if (i % 2 == 0) {
            console.log(i);
            contadorPares++;
        }
    }

console.log("Pares encontrados: " + contadorPares);

}//FIN DE LA FUNCIÓN