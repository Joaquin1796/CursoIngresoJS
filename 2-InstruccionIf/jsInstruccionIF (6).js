function mostrar()
{
//tomo la edad  
var edad = parseInt(document.getElementById("edad").value);

    if (edad >= 13 && edad <= 17) 
        {alert("Eres adolescente") }

        else  if (edad >= 18) {   
            alert("Eres mayor de edad")
        }  
        else {alert("Es un niño")};



}//FIN DE LA FUNCIÓN

/* valido y simplificado
if (edad >= 18) 
        {alert("Es mayor") }

        else  if (edad >= 13) {   
            alert("Es adolescente")
        }  
        else {alert("Es un niño")};
*/