function mostrar()
{

var sexo = prompt("ingrese f ó m .").toLowerCase();
     
//  while (sexo != "f" && sexo != "m" ) 
    while (! (sexo == "f" || sexo == "m" ) ) {

        sexo = prompt("Error, sexo invalido").toLowerCase();
    }

    alert("Correcto");

document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN

