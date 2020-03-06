function mostrar() {


    var valor;
    var color;
    var seguir;
    var contadorRojos = 0;
    var precioMayor = 0;
    var precioInferior = 0;
    var contadorVihiculos = 0;
    var acumuladorVehiculos = 0;
    var promedioVehiculos;
    var flag = 0;
    var valorMaximo;
    var colorMaximo;


    do {

        valor = parseInt(prompt("Ingrese el valor. (0-10000)"));
        while (valor < 0 || valor > 10000 || isNaN(valor)) {
            valor = parseInt(prompt("INCORRECTO. Ingrese un valor (0-10000)."));
        }
        color = prompt("Ingrese un color para el auto. (rojo verde o amarillo)");
        while (color != "rojo" && color != "verde" && color != "amarillo") {
            color = prompt("INCORRECTO. Ingrese un color para el auto. (rojo verde o amarillo)");
        }
        if (color == "rojo") {
            contadorRojos++;
        }
        if (color == "rojo" && valor >= 5000) {
            precioMayor++;
        }
        if (valor > 5000) {
            precioInferior++;
        }
        if (valor) {
            acumuladorVehiculos += valor;
            contadorVihiculos++;
        }
        if (flag == 0 || valor > valorMaximo) {
            valorMaximo = valor;
            colorMaximo = color;
            flag = 1;
        }

        seguir = prompt("DESEA CONTINUAR?");
    } while (seguir == 's');



    promedioVehiculos = acumuladorVehiculos / contadorVihiculos;

    document.write("La cantida de rojos " + contadorRojos + "<br/>");
    document.write("La cantidad de rojos con precio mayor a 5000 " + precioMayor + "<br/>");
    document.write("La cantidad de vehiculos con precio inferior a 5000 " + precioInferior + "<br/>");
    document.write("El promedio de todos los vehiculos ingresados " + promedioVehiculos + "<br/>");
    document.write("El mas caro y su color " + valorMaximo + " y " + colorMaximo + "<br/>");












}
