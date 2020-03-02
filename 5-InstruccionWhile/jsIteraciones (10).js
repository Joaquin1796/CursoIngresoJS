function mostrar() {


	//declarar contadores y variables 
	var numero;
	var respuesta;
	var acumuladorPos = 0;
	var acumuladorNeg = 0;
	var contadorPos = 0;
	var contadorNeg = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPos = 0;
	var promedioNeg = 0;
	var diferencia;


	do {
		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
		} if (numero < 0) {
			acumuladorNeg += numero
			contadorNeg++
		} else if (numero > 0) {
			acumuladorPos += numero
			contadorPos++
		} else {
			contadorCeros++
		}

		if (numero % 2 == 0) {
			contadorPares++
		}

		respuesta = prompt("Quiere ingresar otro numero?");
	} while (respuesta == 's');

	promedioPos = acumuladorPos / contadorPos

	promedioNeg = acumuladorNeg / contadorNeg

	diferencia = contadorPos - contadorNeg



	document.write("1-Suma de los negativos " + acumuladorNeg + "<br/>" +
		"2-Suma de los positivos " + acumuladorPos + "<br/>" +
		"3-Cantidad de positivos " + contadorPos + "<br/>" +
		"4-Cantidad de negativos " + contadorNeg + "<br/>" +
		"5-Cantidad de ceros " + contadorCeros + "<br/>" +
		"6-Cantidad de números pares " + contadorPares + "<br/>" +
		"7-Promedio de positivos " + promedioPos + "<br/>" +
		"8-Promedios de negativos " + promedioNeg + "<br/>" +
		"9-Diferencia entre positivos y negativos, (positvos-negativos) " + diferencia)

}

//FIN DE LA FUNCIÓN

/*
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos).
*/