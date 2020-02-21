function mostrar()
{
	var numero = 0;
	var flag = 0;
	var positivo = 0;
	var negativo = 1;
	var respuesta ='s';

	alert("Hola");

	do {
		numero = parseInt(prompt("Ingrese un numero."));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero . Ingrese un numero"));
		}
		if (numero >= 0) {
		positivo = positivo + numero;
		} else {
			negativo = negativo * numero;
			flag = 1;
		}

		respuesta = prompt("Quiere ingresar otro numero?");
	} while (respuesta == 's');
   
	if (respuesta == 's'){
		negativo = 0;
	}
	

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN