function mostrar() {
    
    var kilos;
    var sabor;
    var acumuladorKilos = 0;
    var contadorKilos = 0;
    var promedioKilos = 0;
    var flag = 0;
    var liviano;
    var livianoSabor;
    var contadorCarne = 0;
    var acumuladorCarne = 0;
    var contadorkilosCarne = 0;
    var acumuladorkilosCarne = 0;
    var promediokiloscarne = 0;

    for (var i = 0; i < 10; i++) {

        kilos = parseInt(prompt("Ingrese los kilos de la bolsa. (0-500)"));
        while (kilos < 0 || kilos > 500 || isNaN(kilos)) {
            kilos = parseInt(prompt("INCORRECTO. Ingrese los kilos validos."));
        }
        sabor = prompt("Ingrese un sabor de alimento. (carne-vegetales-pollo)");
        while (sabor != "vegetales" && sabor != "carne" && sabor != "pollo") {
            sabor = prompt("INCORRECTO. Ingrese un sabor de alimento valido. (carne-vegetales-pollo)");
        }

        if ( kilos ) {
            acumuladorKilos += kilos;
            contadorKilos++;
        }
        if ( flag == 0 || kilos < liviano ) {
            liviano = kilos;
            livianoSabor = sabor;
            flag = 1;
        }
         if ( sabor == "carne" ) {
            acumuladorCarne += sabor;
            contadorCarne ++;
            acumuladorkilosCarne += kilos;
            contadorkilosCarne ++;
        }

    }


    if ( contadorKilos != 0) {
        promedioKilos = acumuladorKilos / contadorKilos;
    }
    if ( contadorkilosCarne !=0 ) {
        promediokiloscarne = acumuladorkilosCarne / contadorkilosCarne;
    }


    alert("El promedio de los kilos totales. " + promedioKilos);
    alert(" El mas liviano y su sabor " + liviano + " y " + livianoSabor);
    alert("La cantidad de sabor carne es " + contadorCarne );
    alert("El promedio de kilos de sabor carne es " + promediokiloscarne)


}
