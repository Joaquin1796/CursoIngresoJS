function mostrar()
{

    var num1;
    var num2;
    var suma;
    var resta;

    num1 = parseInt(prompt("Ingrese le primer numero"));
    num2 = parseInt(prompt("Ingrese le segundo numero"));

    if ( num1 == num2 ) {
            alert(num1 + '  '+ num2)    
    } else if ( num1 > num2 ) {
           resta = num1 - num2 
           alert(resta);
    } else if ( num1 < num2 ) {
        suma = num1 + num2 
        alert(suma);
     if (suma > 10) {
        alert("La suma es " + suma + " y supero 10.")
      }
    }     
}
