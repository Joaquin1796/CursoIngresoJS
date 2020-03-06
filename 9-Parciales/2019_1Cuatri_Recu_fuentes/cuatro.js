function mostrar() {
    var num1;
    var num2;
    var numero;

    num1 = parseInt(prompt("Ingrese el primer numero"));
    num2 = parseInt(prompt("Ingrese el segundo numero"));

    if (num1 == num2) {
        numero = num1 * num1;
        alert(numero);

    } else if ( num1 % num2 == 0 ) {
        numero = num1 - num2;
        alert(numero);

    } else if ( num1 % num2 != 0 ) {
        numero =  num1 / num2 
        alert(numero);
        if ( numero > 3 ) {
            alert(numero);
        }

    } 






}
