function mostrar() {

	var contador = 0;
	var acumulador = 0;
	var seguir = 's';
	var numero;
	var promedio;

	alert("Hola");
	do {
		numero = parseInt(prompt("Ingrese un numero"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero"));
		}
		acumulador = acumulador + numero;
		contador++;
		
		seguir = prompt("Quiere ingresar otro numero?");
	} while (seguir == 's');

	promedio = acumulador / contador;

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN