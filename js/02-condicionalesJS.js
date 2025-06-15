// Estructura condicional

/*
if(condición lógica) {
    todas las lineas de código que quiero que el programa haga si se cumple la condición
}
else {
    todas las lineas de cóodigo que quiero que el programa haga si no se cumple la condición
}

Estructura condicional con else-if

if(condición lógica){
    todas las lineas de código que quiero que el programa haga si se cumple la condición
}

else{
    todas las lineas de código que quiero que el programa haga si no se cumple la condición
}
*/

// Pedir la edad y decirle si es mayor de edad: Crear un algoritmo que pida la edad del usuario y determine si es mayor de edad (18 años).
const edad = parseInt(prompt("Ingresá tu edad: "));
console.log(edad);
// Condicional "y" && AND
// Condicional "o" || OR
if (edad > 0 && edad <= 110) {
  if (edad >= 18) {
    alert("Sos mayor de edad");
  } else {
    alert("Sos menor de edad");
  }
} else {
  alert("Valor erroneo");
}
