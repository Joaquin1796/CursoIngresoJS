function mostrar()
{
//tomo la edad  

var Mes = document.getElementById('mes').value;

switch (Mes) {
    case ("Enero"):
    alert("Este mes tiene 30 o mas dìas.")
        break; 

    case ("Febrero"):
        alert("Este mes no tiene mas de 29 dìas")
        break;

    case ("Marzo"):        
    case ("Abril"):           
    case ("Mayo"):
    case ("Junio"):      
    case ("Julio"):           
    case ("Agosto"):
    case ("Septiembre"):         
    case ("Octubre"):          
    case ("Noviembre"):   
    case ("Diciembre"):
        alert("Este mes tiene 30 o mas dìas.")
        break;
}
	

}

//FIN DE LA FUNCIÓN