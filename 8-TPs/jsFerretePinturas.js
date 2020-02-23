/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en F debemos mostrar la temperatura en C con un mensaje concatenado (ej.: " 32 F son 0 C").
B.	Al ingresar una temperatura en C debemos mostrar la temperatura en F (ej.: "0  C son 32 F ").
*/
function FahrenheitCentigrados () 
{
    //var temperatura = 0;
    var fahrenheit;
    var centígrados;
      
    fahrenheit  = parseInt(document.getElementById("Temperatura").value);

    centígrados = (fahrenheit  - 32) * 0.555556;  

	alert( fahrenheit  + "° Fahrenheit son " + centígrados + "° Centígrados.");
}

function CentigradosFahrenheit () 
{
	var fahrenheit;
    var centígrados;
      
    centígrados = parseInt(document.getElementById("Temperatura").value);

    fahrenheit  = (centígrados * 1.8) + 32;  

	alert( centígrados + "° Centígrados son " + fahrenheit  + "° Fahrenheit.");
}

