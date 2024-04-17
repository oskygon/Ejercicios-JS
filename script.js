// alert("Hello");
// document.write("Hello");
// document.write(3+5);
//let nombre = prompt("Escribe tu nombre");
//document.write("Hola," + " " + nombre);


// Ejercicio extra (combinando .js, .css y .html): Crear una página que
// pida el nombre del usuario, dos valores y nos muestre las 4
// operaciones aritméticas. Todos los datos deberán aparecer en el
// documento, incorporar estilos.
//prompt devuelve valores de tipo cadena (string), no de tipo número.
//  Cuando se utilizan operadores matemáticos con cadenas en JavaScript, 
//  en lugar de realizar operaciones aritméticas, se concatenan las cadenas. 
//  Para solucionarlo, necesitas convertir las cadenas ingresadas a números. 
//  Puedes hacerlo usando la función parseInt() o parseFloat()

// let usuario =prompt("Ingrese nombre de usuario")
// let numeroUno = parseInt(prompt("Ingrese un número"));
// let numeroDos = parseInt(prompt("Ingrese otro número"));
// let suma = numeroUno + numeroDos;
// let resta = numeroUno - numeroDos;
// let producto = numeroUno * numeroDos;
// let division = numeroUno / numeroDos;
// document.write("Suma" + " " + suma + "<br>");
// document.write("Resta" + " " + resta + "<br>");
// document.write("Producto" +" " + producto + "<br>");
// document.write("División" + " " + division + "<br>");
// let resultado = numeroUno + numeroDos ;
// console.log(resultado);

// let ingresaNum1 = parseFloat(prompt("Ingrese un número  (utilice punto para decimales)"));
// let ingresaNum2 = parseFloat(prompt ("Ingrese otro número (utilice punto para decimales)"));
// document.write(ingresaNum1 + ingresaNum2);





// let numberOne = prompt("Ingresa un número");
// let numberTwo = prompt("Ingresa otro número");
// document.write(numberOne + numberTwo);

//Escriba en pantalla cual es el mayor de dos números ingresados. 3 líneas

// let numero3= parseFloat(prompt("Escriba un número (utilice punto para decimales)"))
// let numero4= parseFloat(prompt("Escriba otro número (utilice punto para decimales)"))
// if (numero3 > numero4){ 
// document.write(numero3);
// }
// else{(numero3 < numero4)
// document.write(numero4);}

//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
//los tres

// let numero3= parseFloat(prompt("Escriba un número (utilice punto para decimales)"));
// let numero4= parseFloat(prompt("Escriba otro número (utilice punto para decimales)"));
// let numero5= parseFloat(prompt("Escriba otro número mas (utilice punto para decimales)"));

// if (numero3 > numero4 && numero3 > numero5){
//     document.write(numero3)

// }
// else if(numero4 > numero3 && numero4 > numero5){ 
//       document.write(numero4)
// }
// else {  (numero5 > numero4 && numero5 > numero3)
//     document.write(numero5)
//}
//Escribe un programa que pida un número y diga si es divisible por 2
let numero6= parseFloat(prompt("Escriba un número (utilice punto para decimales)"));
if(numero6 % 2 == 0){
    document.write("Es par")
}
else{(numero6 % 2 !== 0)
    document.write("Es impar")
}

