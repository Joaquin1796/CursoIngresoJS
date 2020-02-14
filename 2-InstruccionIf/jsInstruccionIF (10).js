function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;	
	var maximo = 10;
	var minimo = 1;

	nota = Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo);

	if (nota <= 10 && nota >= 9) {
		alert("Exelente Nota : " + nota);
	}
		else if (nota <9 && nota >= 4){
			alert("Aprobado Nota : " + nota);
		}
		else {alert("Vamos la proxima se puede. Nota : " + nota)};
	

}//FIN DE LA FUNCIÓN 

/*
TAMBIEN mas corto
var nota;	
	var maximo = 10;
	var minimo = 1;

	nota = Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo);

	if (nota < 4) {
		alert("Vamos la proxima se puede. Nota : " + nota);
	}
		else if (nota < 9){
			alert("Aprobado Nota : " + nota);
		}
		else {alert("Exelente Nota : " + nota)};
*/