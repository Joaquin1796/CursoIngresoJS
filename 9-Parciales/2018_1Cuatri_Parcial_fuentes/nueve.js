function mostrar()
{

    var marca;
    var temp;
    var peso;
    var seguir;
    var flag = 0;
    var flag1 = 0;
    var flag2 = 0;
    var contadorTempPar = 0;
    var pesoMas;
    var producMasPe;
    var contadorCongelados = 0;
    var contadorPeso = 0;
    var acumuladorPeso = 0;
    var promedioPeso = 0;
    var pesomaximo;
    var pesominimo;

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
            contadorCongelados ++;
        }
        //--------D---------
        if ( peso ) {
            acumuladorPeso = acumuladorPeso + peso;
            contadorPeso++;
        }       
         //--------E---------
        if ( flag1 == 0 || peso > pesomaximo) {
            pesomaximo = peso;
            flag1 = 1;
        }
        if ( flag2 == 0 || peso < pesominimo) {
            pesominimo = peso;
            flag2 = 1;
        }

        seguir = prompt("DESEA CONTINUAR?");
    } while  (seguir == 's');

    //---------D------

    promedioPeso = acumuladorPeso / contadorPeso;


    document.write("La cantidad de temperaturas pares " + contadorTempPar + "<br/>");
    document.write("La marca del producto más pesado " + producMasPe + "<br/>");
    document.write("La cantidad de productos que se conservan a menos de 0 grados " + contadorCongelados + "<br/>");
    document.write("El promedio del peso de todos los productos. " + promedioPeso + "<br/>");
    document.write("El peso máximo y el mínimo " + pesomaximo + " y " + pesominimo + "<br/>");





}

/*
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.
*/