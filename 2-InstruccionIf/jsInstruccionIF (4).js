function mostrar()
{
//tomo la edad  
    var edad = parseInt(document.getElementById("edad").value);

    if (edad >= 13 && edad <= 17) 
        {alert("Eres adolescente") }  
        else {alert("No eres adolescente")};
};


// Otra forma de hacerlo, a la inversa.
/*
if (!(edad < 13 || edad > 17)) {
     alert("Eres adolescente")  
}  
*/

//FIN DE LA FUNCIÓN