/* Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
Ejercicios con Math
*/

// Pedir al usario las filas y columnas
const filas = parseInt(prompt ("Ingresá un número de filas"))
const columnas = parseInt(prompt ("Ingresá un número de columnas"))
let totalCelda = filas*columnas

console.log(filas, columnas)

// Dibujar la tabla
document.writeln(`<table class="table table-striped"><tbody>`);
for(let indiceFilas=0; indiceFilas<filas ; indiceFilas++){          
document.writeln(`<tr>`);
for (let indiceColumna=0; indiceColumna<columnas ; indiceColumna++ ){
document.writeln(`<td class="p-2">${totalCelda--}</td>`);  
// totalCelda-- (si pusiera sin el "--" en la linea anterior)  
}
document.writeln(`</tr>`);
}
document.writeln(`</tbody></table>`)
            

// Dibujar el valor de las celdas
