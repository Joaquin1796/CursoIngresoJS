function mostrar()
{
    var sexo;
    var edad;
    var nota;
    var seguir;




    do {  
        sexo = prompt("Ingrese un país");
        while ( sexo != 'f' && sexo != 'm') {
            sexo = prompt("Sexo invalido. Ingrese un país");
        }

        edad = parseInt(prompt("Ingrese una edad (0 - 50)"));
        while (edad < 0 || edad > 50 || isNaN(edad)) {
            edad = parseInt(prompt("Edad invalida. Ingrese una edad (0 - 50)"));
        }
        nota = parseInt(prompt("Ingrese una nota"));
        while (nota < 1 || nota > 10 || isNaN(nota)) {
            nota = parseInt(prompt("Nota invalida. Ingrese una nota"));
        }












        
    


        seguir = prompt("DESEA CONTINUAR?");
    } while  (seguir == 's');
}
