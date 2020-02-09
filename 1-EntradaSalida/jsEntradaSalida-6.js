/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
  var num1  
  var num2
  var resultado

  num1 = parseInt(document.getElementById("numeroUno").value);
  num2 = parseInt(document.getElementById("numeroDos").value);
  resultado = (num1 + num2);

  alert (resultado);

}

//Tambíen funciona solo con dos variables,
// y realizando la suma de las mismas dentro de alert.