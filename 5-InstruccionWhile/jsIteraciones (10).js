function mostrar()
{


	//declarar contadores y variables 
	var flag = 0;
	var numero;
	var positivo;
	var negativo;
	var respuesta;
	var suma;
	var contador;

	do {
		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
		}
		switch (numero){

		}
		respuesta = prompt("Quiere ingresar otro numero?");
	}  while (respuesta == 's');



}//FIN DE LA FUNCIÓN