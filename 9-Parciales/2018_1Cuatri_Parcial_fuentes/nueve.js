function mostrar()
{

    var marca;
    var temp;
    var peso;
    var seguir;
    var flag = 0;
    var contadorTempPar = 0;
    var pesoMas;
    var producMasPe;
    var contadorCongelados;

    do {  
        marca = prompt("Ingrese la marca del producto");

        temp = parseInt(prompt("Ingrese una temperatura (-30 - 30)"));
        while (temp < -30 || temp > 30 || isNaN(temp)) {
            temp = parseInt(prompt("Temperatura invalida. Ingrese una temperatura (-30 - 30)"));
        }
        peso = parseInt(prompt("Ingrese una peso"));
        while (peso < 1 || peso > 100 || isNaN(peso)) {
            peso = parseInt(prompt("Eso no es un peso. Ingrese un peso"));
        }
     //------A---------
        if ( temp % 2 == 0 ) {
        contadorTempPar++;
        }
     //--------B--------   
        if (( flag == 0 || peso > pesoMas) && temp > 0 ) {
           pesoMas =  peso;
           producMasPe = marca;
           flag = 1;
        }
        //---------C--------
        if ( temp < 0 ) {
            

        }



        seguir = prompt("DESEA CONTINUAR?");
    } while  (seguir == 's');


alert("a " + contadorTempPar+" b"+producMasPe);




}
