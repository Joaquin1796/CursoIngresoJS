function mostrar()
{
//tomo la edad  
var edad = parseInt(document.getElementById("edad").value);

   /* if (edad < 13 || edad > 17) 
        {alert("No es adolescente") }  
    */
        
    if (! (edad >= 13 && edad <= 17) ) {
        alert("No es adolescente") };

}

//FIN DE LA FUNCIÓN

/*
if (edad >= 13 && edad <= 17) 
        {alert("Eres adolescente") }  
        else {alert("No eres adolescente")};
        */