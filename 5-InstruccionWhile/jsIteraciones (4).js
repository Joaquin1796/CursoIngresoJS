function mostrar() {
	var numero = parseInt(prompt("ingrese un número entre 0 y 9.").value);

	while (numero < 0 || numero > 9 || isNaN(numero) ) {
		numero =  parseInt(prompt("Error: el numeor debe estar entre 0 y 9. Reintente "));
	} 	
	
	alert("Correcto");

	document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN